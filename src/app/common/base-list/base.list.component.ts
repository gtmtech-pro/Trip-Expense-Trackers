import { Injectable, OnInit, Component, ViewChild, ElementRef } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SearchFilterModel } from '../../models/search.filter.model';
import { DatePipe } from "@angular/common";
import { UserModel } from "../../models/user.model";
import { TripSettingModel } from "../../models/trip.setting.model";
import { FormGroup } from "@angular/forms";
import { AppConstants } from "../../app.constants";
import { PageRightModel } from "../../models/page.right.model";
import { environment } from "../../../environments/environment";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject } from "rxjs";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";
// import * as XLSX from 'xlsx';
import * as XLSX from 'xlsx-js-style';

@Component({
    templateUrl: './base.list.component.html',
    styleUrls: ['./base.list.component.scss'],
    standalone: true
})
@Injectable()
export class BaseListComponent<T> implements OnInit {
    public Constants: AppConstants;
    public appInfo = environment;
    public IsLoading: boolean = false;
    public PageRights!: PageRightModel;
    public UnsubscribeAll: Subject<any>;
    public CheckedDeletedIds: any[] = [];
    public MonthPickerOptions: any = {};

    breadCrumbItems!: Array<{}>;
    searchForm!: FormGroup;
    filterForm!: FormGroup;

    tableDataSource: MatTableDataSource<Element>;
    displayedColumns: string[] = [];
    SearchBy: SearchFilterModel;
    IsShowFilter: boolean = false;
    isAll: boolean = true;
    DateFormatPipe = new DatePipe('en-US');

    private _userModel!: UserModel;
    public get UserModel(): UserModel {
        if (this._userModel == null) {
            this._userModel = JSON.parse(sessionStorage.getItem("currentUser")!);
        }
        return this._userModel;
    }

    public set UserModel(value: UserModel) {
        if (value == null) {
            this._userModel = JSON.parse(sessionStorage.getItem("currentUser")!);
        }
        this._userModel = value;
    }

    private _TripSettings!: TripSettingModel;
    public get TripSettings(): TripSettingModel {
        if (this._TripSettings == null) {
            this._TripSettings = new TripSettingModel();
        }
        return this._TripSettings;
    }
    public set TripSettings(value: TripSettingModel) {
        this._TripSettings = value;
    }

    @ViewChild(MatPaginator, { static: true })
    ListPaginator!: MatPaginator;

    @ViewChild(MatSort, { static: true })
    ListSort!: MatSort;

    @ViewChild('filter', { static: true })
    ListFilter!: ElementRef;

    AcademicYearId!: string;

    public get SalaryMonth(): string | null {
        let currentDate = new Date();
        let dateTimeValue = this.DateFormatPipe.transform(currentDate, this.Constants.ServerDateFormat);

        return dateTimeValue;
    }

    constructor(public snackBar: MatSnackBar) {
        this.Constants = new AppConstants();

        this.initPageRights();

        // Set the private defaults
        this.UnsubscribeAll = new Subject();

        var _currentUserText = sessionStorage.getItem("currentUser");
        if (_currentUserText != null) {
            this.UserModel = JSON.parse(_currentUserText);
            AppConstants.UserId = this.UserModel.UserId;
            AppConstants.IsAdmin = this.UserModel.IsAdmin;
            AppConstants.AuthToken = this.UserModel.AuthToken;
        }

        var _TripSettingsText = sessionStorage.getItem("TripSettings");
        if (_TripSettingsText != null) {
            this._TripSettings = JSON.parse(_TripSettingsText);
        }
        else {
            this._TripSettings = new TripSettingModel();
        }

        // Define the options with the monthSelectPlugin
        this.MonthPickerOptions = [
            monthSelectPlugin({
                shorthand: true, // Use short month names (e.g., "Sep" instead of "September")
                dateFormat: this.Constants.DateFormatYM, // 'm/Y' : The format for the actual input value (e.g., "12/2025")
                altFormat: this.Constants.DateFormatFY, // 'F Y' : The human-readable format shown to the user (e.g., "December 2025")
                theme: 'light', // Optional: change theme
            })
        ];

        this.tableDataSource = new MatTableDataSource<Element>();

        this.SearchBy = new SearchFilterModel(this.UserModel);
        this.SearchBy.FinancialYearId = this.UserModel.FinancialYearId;
        this.SearchBy.PageSize = (this.TripSettings.PageSizeMasters == 0) ? 25 : this.TripSettings.PageSizeMasters;
    }

    ngOnInit() { }

    getCurrentPageRows(): any {
        // const startIndex = this.tableDataSource.paginator.pageIndex * this.tableDataSource.paginator.PageSize
        // const endIndex = startIndex + this.tableDataSource.paginator.PageSize;

        // return this.tableDataSource.filteredData.slice(startIndex, endIndex);
        return 1;
    }

    exportExcelFromTable(dataSource: any, dataType: string): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            let currentDateTime = this.DateFormatPipe.transform(Date.now(), 'yyyyMMdd-HHmm');

            //converts a DOM TABLE element to a worksheet
            //const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(dataTable.nativeElement);
            const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataSource);

            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, dataType);

            /* save to file */
            let fileName = dataType + '-' + currentDateTime + '.xlsx';
            XLSX.writeFile(wb, fileName);

            resolve(currentDateTime);
        });

        return promise;
    }

    exportExcelReportFromTable(dataSource: any[], dataType: string, title: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let currentDateTime = this.DateFormatPipe.transform(Date.now(), 'yyyyMMdd-HHmm');

            const salaryMonth = new Date(); // or your selected month

            const orgName = "SHRI.KALE NARENDRA RAMRAO,LATUR";
            const reportTitle = title;//+ ' ' + this.DateFormatPipe.transform(salaryMonth, 'yyyy');

            // Extract column headers
            const headers = Object.keys(dataSource[0]);

            // Build worksheet data
            const wsData = [
                [orgName],
                [reportTitle],
                headers,
                ...dataSource.map(obj => headers.map(h => obj[h]))
            ];

            const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(wsData);

            // Merge first two rows across all columns
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: headers.length - 1 } },
                { s: { r: 1, c: 0 }, e: { r: 1, c: headers.length - 1 } }
            ];

            for (let c = 0; c < headers.length; c++) {
                // Row 1 -set font size and font-style bold
                let cell1 = XLSX.utils.encode_cell({ r: 0, c });
                if (!ws[cell1]) ws[cell1] = { t: "s", v: "" };

                ws[cell1].s = {
                    font: { bold: true, sz: 22 },
                    alignment: { horizontal: "center", vertical: "center" },
                    border: {
                        top: { style: "thick" },
                        bottom: { style: "thin" }
                    }
                };

                // Row 2 -set font size and font-style bold
                let cell2 = XLSX.utils.encode_cell({ r: 1, c });
                if (!ws[cell2]) ws[cell2] = { t: "s", v: "" };

                ws[cell2].s = {
                    font: { bold: true, sz: 16 },
                    alignment: { horizontal: "center", vertical: "center" },
                    border: {
                        top: { style: "thick" },
                        bottom: { style: "thick" }
                    }
                };
            }

            // apply styles AFTER merge
            ws['A1'].s = {
                font: { bold: true, sz: 22 },
                alignment: { horizontal: "center", vertical: "center" },
                fill: { fgColor: { rgb: "D9D9D9" } },
                border: { top: { style: "thick" }, bottom: { style: "thin" } }

            };

            ws['A2'].s = {
                font: { bold: true, sz: 16 },
                alignment: { horizontal: "center", vertical: "center" },
                fill: { fgColor: { rgb: "D9D9D9" } },
                border: { top: { style: "thick" }, bottom: { style: "thick" } }
            };

            for (let c = 0; c < headers.length; c++) {
                const cellRef = XLSX.utils.encode_cell({ r: 2, c }); // r:2 = row 3
                // const cellAddress = XLSX.utils.encode_col(c) + "3"; // A3, B3, C3...

                if (!ws[cellRef]) continue;

                ws[cellRef].s = {
                    font: { bold: true, sz: 12 },
                    alignment: {
                        horizontal: "center",
                        vertical: "center",
                        wrapText: true
                    }
                };
            }

            // ✅ Set row heights here
            ws['!rows'] = [
                { hpt: 30 }, // Row 1 (Organization Name)
                { hpt: 24 },  // Row 2 (Report Title)

            ];
            // Enable Auto Filter on header row
            // ws['!autofilter'] = {
            //     ref: XLSX.utils.encode_range({
            //         s: { r: 2, c: 0 },
            //         e: { r: 2, c: headers.length - 1 }
            //     })
            // };

            // Freeze top 3 rows
            ws['!freeze'] = { xSplit: 0, ySplit: 3 };

            // Apply border to all cells
            if (ws['!ref']) {
                const range = XLSX.utils.decode_range(ws['!ref']);
                for (let R = range.s.r; R <= range.e.r; ++R) {
                    for (let C = range.s.c; C <= range.e.c; ++C) {

                        const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
                        if (!ws[cellRef]) continue;

                        const cell = ws[cellRef];

                        cell.s = cell.s || {};
                        cell.s.border = {
                            top: { style: "thin" },
                            bottom: { style: "thin" },
                            left: { style: "thin" },
                            right: { style: "thin" }
                        }
                        // cell.s.alignment = { vertical: "center", horizontal: "center" }
                    };
                }

                // apply style to last row based on condition if row contains value "Total"
                for (let R = range.s.r; R <= range.e.r; R++) {

                    let isTotalRow = false;

                    // check if row contains "Total"
                    for (let C = range.s.c; C <= range.e.c; C++) {

                        const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
                        const cell = ws[cellRef];

                        if (cell && typeof cell.v === "string" && cell.v.toLowerCase().includes("total")) {
                            isTotalRow = true;
                            break;
                        }
                    }

                    // apply style if TOTAL row
                    if (isTotalRow) {
                        for (let C = range.s.c; C <= range.e.c; C++) {
                            const cellRef = XLSX.utils.encode_cell({ r: R, c: C });

                            if (!ws[cellRef]) ws[cellRef] = { t: "s", v: "" };

                            ws[cellRef].s = {
                                ...ws[cellRef].s,
                                font: { bold: true, sz: 12 },
                                fill: { fgColor: { rgb: "E7E6E6" } },
                                alignment: { horizontal: "center", vertical: "center" },
                                border: {
                                    top: { style: "thick" },
                                    bottom: { style: "thick" },
                                    left: { style: "thin" },
                                    right: { style: "thin" }
                                }
                            };
                        }

                    }
                }
            }

            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, dataType);

            let fileName = dataType + '-' + currentDateTime + '.xlsx';
            XLSX.writeFile(wb, fileName);

            resolve(currentDateTime);
        });
    }

    showHideFilters(): void {
        this.IsShowFilter = !this.IsShowFilter;
    }

    showHideLoading(isLoading: boolean): void {
        if (isLoading)
            document.getElementById('elmLoader')?.classList.remove('d-none');
        else
            document.getElementById('elmLoader')?.classList.add('d-none');
    }

    showNoDataFoundSnackBar() {
        this.snackBar.open(
            this.Constants.Messages.NoDataFoundMessage,
            this.Constants.Html.Dismiss,
            {
                duration: this.Constants.Html.Duration,
                panelClass: [this.Constants.Html.InfoSnackbar]
            }
        );
    }

    showActionMessage(messageText: string, messageType: string) {
        this.snackBar.open(messageText, this.Constants.Html.Dismiss, {
            duration: this.Constants.Html.Duration,
            verticalPosition: "top",
            horizontalPosition: "end",
            panelClass: [messageType]
        });
    }

    initPageRights() {
        var userRoleTransactionJson = window.sessionStorage.getItem('userRoleTransactions');

        if (userRoleTransactionJson != undefined) {
            let userRoleTransactions = JSON.parse(userRoleTransactionJson);

            let userPageRights = userRoleTransactions.find((ut: any) => window.location.pathname.indexOf(ut.RouteUrl) > -1);
            if (userPageRights != undefined && userPageRights != null) {
                this.PageRights = new PageRightModel(userPageRights);
            }
            else if (window.location.pathname !== '/login') {
                //this.commonService.openShowDialog("You are not authorized to access this page. Please contact the administrator.");
                //this.router.navigate([RouteConstants.Login]);

                // Logout current user and clear all resources
                //this.commonService.authenticationService.logout();
            }
        }
    }

    toCamelCase(value: any) {
        if (!value) return '';
        return value
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]+(.)/g, (_: any, chr: any) => chr.toUpperCase());
    }

    toPascalCase(value: any) {
        if (!value) return '';
        return value
            .toLowerCase()
            .replace(/(^\w|[^a-zA-Z0-9]+\w)/g, (match: any) =>
                match.replace(/[^a-zA-Z0-9]+/, '').toUpperCase()
            );
    }
}
