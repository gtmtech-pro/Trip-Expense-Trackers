import { Injectable, OnInit, Component, ElementRef, ViewChild } from "@angular/core";
import { AppConstants } from "../../app.constants";
import { CommonService } from "../../services/common.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar"
import { UserModel } from "../../models/user.model";
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import { TripSettingModel } from "../../models/trip.setting.model";
import { PageRightModel } from "../../models/page.right.model";
import { FileUploadModel } from "../../models/file.upload.model";
import { environment } from "../../../environments/environment";
import { isMoment } from "moment";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

@Component({
    providers: [AppConstants],
    templateUrl: './base.component.html',
    styleUrls: ['./base.component.scss'],
    standalone: true
})
@Injectable()
export class BaseComponent<T> implements OnInit {
    public Constants: AppConstants;
    public appInfo = environment;
    public IsLoading: boolean = false;
    public IsSubmitted: boolean = false;
    public PageRights!: PageRightModel;
    public BreadCrumbItems!: Array<{}>;

    //public UnsubscribeAll: Subject<any>;
    public Errors: any = [];
    public DateFormatPipe = new DatePipe('en-US');
    public AllowedImageExtensions = ".jpg, .jpeg, .png, .gif, .tif, .bmp";
    public AllowedExcelExtensions = ".xls, .xlsx";
    public AllowedPDFExtensions = ".pdf";
    public DocumentExtensions = ".jpg, .jpeg, .png, .pdf";
    public IsAllowAddSection: boolean = false;
    public IsAllowEditSection: boolean = false;
    public FormSectionData: any = {};
    public MonthPickerOptions: any = {};

    @ViewChild('scrollScreen') scrollContainer!: ElementRef;

    public get CurrentDate(): Date {
        return new Date();
    }

    public get CurrentDateTime(): string | null {
        let currentDate = new Date();

        let dateTimeValue = this.DateFormatPipe.transform(currentDate, this.Constants.ServerDateFormat);

        return dateTimeValue;
    }

    public GetTimeOnly(dateValue: Date): string | null {
        let dateTimeValue = this.DateFormatPipe.transform(dateValue, this.Constants.ServerTimeFormatHM);

        return dateTimeValue;
    }

    public GetDate(days: number): Date {
        let currentDate = new Date();
        let result = currentDate.setDate(currentDate.getDate() + days);

        return new Date(result);
    }

    // set min date to datepicker
    public get MinDateTime(): Date {
        let currentDate = new Date();

        let dateTimeValue = this.DateFormatPipe.transform(currentDate, "yyyy/MM/dd") + '12:00:00 AM';

        return new Date(dateTimeValue);
    }

    public get MinimumAgeDate(): Date {
        let maxDate = new Date(Date.now());

        maxDate.setDate(maxDate.getDate());
        maxDate.setFullYear(maxDate.getFullYear() - 18);

        return maxDate;
    }

    public get MinimumAgeChildrenDate(): Date {
        let maxDate = new Date(Date.now());

        maxDate.setDate(maxDate.getDate());
        maxDate.setFullYear(maxDate.getFullYear() - 12);

        return maxDate;
    }

    private _userModel: UserModel = new UserModel;
    public get UserModel(): UserModel {
        return this._userModel;
    }

    public set UserModel(value: UserModel) {
        if (value == null) {
            this.UserModel = JSON.parse(sessionStorage.getItem("currentUser")!);
        }
        this._userModel = value;
    }

    private _TripSettings: TripSettingModel = new TripSettingModel;
    public get TripSettings(): TripSettingModel {
        return this._TripSettings;
    }
    public set TripSettings(value: TripSettingModel) {
        this._TripSettings = value;
    }

    constructor(
        public commonService: CommonService,
        public router: Router,
        public route: ActivatedRoute,
        public snackBar: MatSnackBar
    ) {
        this.Constants = new AppConstants();
        this.initPageRights();

        // Set the private defaults
        //this.UnsubscribeAll = new Subject();

        var _currentUserText = sessionStorage.getItem("currentUser");
        if (_currentUserText != null) {
            this.UserModel = JSON.parse(_currentUserText);
            AppConstants.UserId = this.UserModel.UserId;
            AppConstants.IsAdmin = this.UserModel.IsAdmin;
            AppConstants.AuthToken = this.UserModel.AuthToken;
        }

        var _TripSettingsText = sessionStorage.getItem("TripSettings");
        if (_TripSettingsText != null) {
            this.TripSettings = JSON.parse(_TripSettingsText);
        }
        else {
            this.TripSettings = new TripSettingModel();
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
    }

    ngOnInit() { }

    showActionMessage(messageText: string, messageType: string) {
        this.snackBar.open(messageText, this.Constants.Html.Dismiss, {
            duration: this.Constants.Html.Duration,
            verticalPosition: "top",
            horizontalPosition: "end",
            panelClass: [messageType]
        });
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

    showErrorMessage(messageText: string, messageType: string) {
        this.snackBar.open(messageText, this.Constants.Html.Dismiss, {
            duration: this.Constants.Html.Duration,
            verticalPosition: "bottom",
            horizontalPosition: "center",
            panelClass: [messageType]
        });
    }

    showHideLoading(isLoading: boolean): void {
        if (isLoading)
            document.getElementById('elmLoader')?.classList.remove('d-none');
        else {
            setTimeout(() => { document.getElementById('elmLoader')?.classList.add('d-none'); }, 200);
        }

        this.IsSubmitted = isLoading
    }

    getErrorMessage(formGroup: FormGroup, controlId: string): void {
        let errorText = '';
        let isNumericCtrl = false;

        // if (controlId == 'PageTitle') {
        //     debugger;
        // }

        let messageText = controlId.replace(/(_|-)/g, ' ').trim()
            .replace(/\w\S*/g, function (str) {
                return str.charAt(0).toUpperCase() + str.substr(1)
            })
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
            .replace('Id', '');

        let controlName = controlId.substring(0, 1).toLowerCase() + controlId.substring(1, controlId.length);

        let fieldCtrl: any = document.getElementsByName(controlName)[0];
        // try {
        //     try {
        //         messageText = fieldCtrl.labels[0].innerText.replace('*', '').trim()
        //     } catch (error) {
        //         messageText = fieldCtrl.parentElement.innerText.replace('*', '').trim()
        //     }
        // } catch (error) {
        // }

        if (formGroup.controls[controlId].hasError('required')) {
            errorText = messageText + ' is required';
        }
        else if (formGroup.controls[controlId].hasError('minlength')) {
            try {
                isNumericCtrl = fieldCtrl.hasAttribute('digitOnly');
            } catch (error) { }

            let errors = formGroup.controls[controlId].errors!;
            errorText = 'Min ' + errors['minlength']['requiredLength'] + (isNumericCtrl ? ' digits' : ' chars') + ' are required';
        }
        else if (formGroup.controls[controlId].hasError('maxlength')) {
            try {
                isNumericCtrl = fieldCtrl.hasAttribute('digitOnly');
            } catch (error) { }

            let errors = formGroup.controls[controlId].errors!;
            errorText = 'Max ' + errors['maxlength']['requiredLength'] + (isNumericCtrl ? ' digits' : ' chars') + ' are required';
        }
        else if (formGroup.controls[controlId].hasError('pattern')) {
            errorText = 'Invalid ' + messageText;
        }
        else if (formGroup.controls[controlId].hasError('matDatepickerParse')) {
            errorText = messageText + ' is required';
        }

        let errorDiv = fieldCtrl.parentElement.getElementsByClassName('invalid-feedback')[0]
        if (errorDiv == undefined && fieldCtrl.parentElement.className == 'input-group')
            errorDiv = fieldCtrl.parentElement.parentElement.getElementsByClassName('invalid-feedback')[0]

        if (errorDiv != undefined)
            errorDiv.textContent = errorText;
    }

    setValueFromFormGroup(formGroup: FormGroup, formModel: any): T {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);

            if (control instanceof FormControl) {
                let controlValue = control.value;
                if (controlValue != null) {
                    if (formModel[field] != controlValue) {
                        formModel[field] = controlValue;

                        if (field.indexOf('Date') > -1 || field.indexOf('On') > -1) {
                            try {
                                if (controlValue != null && controlValue != "") {
                                    if (isMoment(controlValue)) {
                                        let currentTime = new Date();
                                        controlValue.set({ "hour": currentTime.getHours(), "minute": currentTime.getMinutes(), "second": currentTime.getSeconds() });
                                    }

                                    formModel[field] = this.DateFormatPipe.transform(controlValue, this.Constants.ServerDateFormat);
                                } else {
                                    formModel[field] = null;
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    }
                }
                else {
                    formModel[field] = null;
                }
            }
            // else if (control instanceof FormGroup) {
            //     console.log(control);
            // }
            // else if (control instanceof FormArray) {
            //     console.log(control);
            // }
        });

        return formModel;
    }

    getHtmlMessage(errors: string[]): string {
        let errorMessages = '';

        if (errors.length > 1) {
            errorMessages = '<ul style="list-style: none; margin: 0; padding: 0;">';

            for (let errorText of errors) {
                errorMessages += '<li>' + errorText + '</li>';
            }
            errorMessages = errorMessages + '</ul>';
        }
        else if (errors.length = 1) {
            errorMessages = '<div style="margin: 0; padding: 0;">' + errors[0] + '';
        }
        return errorMessages;
    }

    getDateValue(dateText: any): any {
        if (dateText != null && dateText != undefined && dateText != "")
            return new Date(dateText);
        else
            return '';
    }

    getFormattedDateValue(dateText: any): any {
        if (dateText != null && dateText != undefined && dateText != "")
            return this.DateFormatPipe.transform(dateText, this.Constants.DateViewFormat);
        else
            return '';
    }

    onChangeDateEnableDisableCheckBox(formControl: FormGroup, evt: any) {
        if (evt.value == null) {
            formControl.controls['IsActive'].enable();
            formControl.controls['IsActive'].setValue(true);
        }
        else {
            formControl.controls['IsActive'].disable();
            formControl.controls['IsActive'].setValue(false);
        }
    }

    clearDateValueInFormControl(formControl: FormGroup, controlName: string, evt: any) {
        evt.stopPropagation();
        formControl.controls[controlName].setValue(null);
        formControl.controls['IsActive'].enable();
        formControl.controls['IsActive'].setValue(true);
    }

    getDateFromYMD(year: number, month: number, day: number): Date {
        let maxDate = new Date(Date.now());

        maxDate.setDate(maxDate.getDate());
        maxDate.setFullYear(maxDate.getFullYear() - year);
        maxDate.setMonth(maxDate.getMonth() - month);
        maxDate.setDate(maxDate.getDay() - day);

        return maxDate;
    }

    readBase64FromFile(file: File | Blob): Observable<any> {
        const reader = new FileReader();
        let fileLoadingEnd = fromEvent(reader, 'loadend').pipe(
            map((read: any) => {
                return read.target.result;
            })
        );

        reader.readAsDataURL(file);

        return fileLoadingEnd;
    }

    initPageRights() {
        var userRoleTransactionJson = sessionStorage.getItem('userRoleTransactions');

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
                this.commonService.authenticationService.logout();
            }
        }
    }

    getUploadedFileData(event: any, contentType: string) {
        let promise = new Promise((resolve, reject) => {

            if (event.target.files.length > 0) {
                const uploadedFile = event.target.files[0];

                let fileUploadData = new FileUploadModel();
                fileUploadData.ContentType = contentType;
                fileUploadData.FileName = uploadedFile.name;
                fileUploadData.FileType = uploadedFile.type;
                fileUploadData.FileSize = uploadedFile.size;

                this.readBase64FromFile(uploadedFile).subscribe(response => {
                    fileUploadData.Base64Data = response;
                    //fileUploadData.UploadFile = uploadedFile;
                    resolve(fileUploadData);
                });
            }
            else {
                resolve(null);
            }
        });

        return promise;
    }

    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }

    validateAllFormFields(formGroup: any) {
        formGroup.markAsTouched()
        this.Errors = [];

        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
                if (control.status == 'INVALID') {
                    this.Errors.push({ FormField: field, FormControl: control });
                }
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
            else if (control instanceof FormArray) {
                this.validateAllFormFields(control);
            }
        });
    }

    // This method auto scrolls to first Invalid control and focus on it to improve UI
    scrollToFirstInvalidControl() {
        setTimeout(() => {
            const firstInvalidControl: HTMLElement = document.querySelector(
                '.ng-invalid[formcontrolname]'
            ) as HTMLElement;

            if (firstInvalidControl) {
                firstInvalidControl.focus();
                firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100); // Delay to ensure DOM is updated
    }

    validateDynamicFormArrayFields(group: FormGroup | FormArray) {
        group.markAsTouched()
        for (let i in group.controls) {
            // if (group.controls[i] instanceof FormControl) {
            //     group.controls[i].markAsTouched();
            // } else {
            //     this.validateDynamicFormArrayFields(group.controls[i]);
            // }
        }
    }

    setUploadedFile(fileUploaded: FileUploadModel) {
        if (fileUploaded == null)
            return null;

        return new FileUploadModel({
            UserId: this.UserModel.UserId,
            ContentId: null,
            FilePath: null,
            ContentType: fileUploaded.ContentType,
            FileName: fileUploaded.FileName,
            FileType: fileUploaded.FileType,
            FileSize: fileUploaded.FileSize,
            Base64Data: fileUploaded.Base64Data
        });
    }

    debugHTMLObjects(htmlObject: any) {
        debugger;
        console.log(htmlObject);
        //<!-- Debug HTML Objects  {{ debugHTMLObjects(tveItem) }} -->
    }

    setMandatoryFieldControl(formControl: FormGroup, controlName: string, chkControl: any) {
        if (chkControl.checked) {
            formControl.controls[controlName].clearValidators();
        }
        else {
            formControl.controls[controlName].setValidators([Validators.required]);
        }
        formControl.controls[controlName].updateValueAndValidity();
    }

    setDefaultImage(formGroup: FormGroup, controlId: string) {
        formGroup.controls[controlId].setValue(this.Constants.DefaultImageUrl);
    }

    maskingStudentAadhaarNo(aadhaarNo: string): string {
        let aadhaarResult = aadhaarNo;
        if (aadhaarNo != null && this.PageRights.ActionType == this.Constants.Actions.View && aadhaarNo != '') {
            aadhaarResult = aadhaarNo.replace(/\d(?=\d{4})/g, "*");
        }

        return aadhaarResult;
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scroll({ top: this.scrollContainer.nativeElement.scrollHeight, left: 0, behavior: 'smooth' });
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    setFormControlInitialState(formGroup: FormGroup, controlList: string[]) {
        controlList.forEach(controlId => {
            this.clearFormControlAsInitialState(formGroup.controls[controlId]);
        });
    }

    clearFormControlAsInitialState(formControl: any) {
        try {
            formControl.patchValue(null);
            formControl.clearValidators();
            formControl.updateValueAndValidity();
            formControl.markAsPristine();
            formControl.markAsUntouched();
        }
        catch (error) {
            console.error('FormControl error message : ', error);
            //throw new Error('An error occurred');
        }
    }

    isInvalidControl(formControl: any): boolean {
        return formControl.touched && formControl.errors;
    }

    isShowErrors(formControl: any): boolean {
        return formControl.touched && formControl.status == 'INVALID';
    }

    isValidRequiredFields(formControl: any): boolean {
        return formControl.touched && formControl.status == 'INVALID' && (formControl.value == null || formControl.value == undefined || formControl.value == '');
    }

    setMinReportingDate(userModel: UserModel, backDatedDays: number): any {
        let minDate = new Date(Date.now());
        let maxDate = new Date(Date.now());
        let dateOfAllocation = new Date(userModel.DateOfJoining);

        let Time = maxDate.getTime() - dateOfAllocation.getTime();
        let Days = Math.floor(Time / (1000 * 3600 * 24));
        if (Days < backDatedDays) {
            minDate = new Date(userModel.DateOfJoining);
        }
        else {
            let past7days = maxDate;
            past7days.setDate(past7days.getDate() - backDatedDays)
            minDate = past7days;
        }

        return minDate;
    }

    getDateForAPIFromText(dateText: string): string {
        if (dateText == null || dateText == '') return '';

        return dateText.substring(6, 10) + '/' + dateText.substring(3, 5) + '/' + dateText.substring(0, 2) + ' ' + dateText.substring(11, dateText.length);
    }

    getTimeForDb(time: string | null | undefined): string {
        if (!time) return '00:00:00'; // fallback for empty input

        // Check if time has AM/PM
        const hasPeriod = time.toUpperCase().includes('AM') || time.toUpperCase().includes('PM');

        if (hasPeriod) {
            const [timePart, period] = time.split(' ');
            if (!timePart || !period) return '00:00:00';

            let [hours, minutes] = timePart.split(':').map(Number);
            if (isNaN(hours) || isNaN(minutes)) return '00:00:00';

            if (period.toUpperCase() === 'PM' && hours < 12) hours += 12;
            if (period.toUpperCase() === 'AM' && hours === 12) hours = 0;

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
        } else {
            // Assume 24-hour format
            const [hours, minutes] = time.split(':').map(Number);
            if (isNaN(hours) || isNaN(minutes)) return '00:00:00';
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
        }
    }

    getTimeForNgxTimepicker(timeValue: any): any {
        let result = null;
        if (timeValue != null)
            result = timeValue.substring(0, 5) + " AM";

        return result;
    }
}
