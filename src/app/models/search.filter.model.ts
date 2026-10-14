import { UserModel } from "./user.model";

export class SearchFilterModel {
    UserId: string;
    RoleId: string;
    AccountId: string;
    FinancialYearId: any;
    Name: string;

    SortOrder: string;
    PageIndex: number;
    PageSize: number;
    TotalResults: number;
    PageSizeOptions: any;
    ShowFirstLastButtons: boolean;

    Filter: any;
    IgnoreCriteria: boolean;

    constructor(userModel: UserModel) {

        this.UserId = userModel.UserId || '';
        this.RoleId = userModel.RoleId || '';
        this.AccountId = userModel.AccountId || '';
        this.Name = '';
        this.Filter = {};
        this.FinancialYearId = null;
        this.IgnoreCriteria = true;

        this.SortOrder = 'asc';
        this.PageIndex = 0;
        this.PageSize = 10000;
        this.TotalResults = 0;
        this.PageSizeOptions = [10, 25, 100, 250, 500];
        this.ShowFirstLastButtons = true;
    }
}

