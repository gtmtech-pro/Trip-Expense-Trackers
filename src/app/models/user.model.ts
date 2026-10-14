export class UserModel {
    LoginUniqueId: string;
    AccountId: string;
    LoginId: string;
    Password: string;
    UserId: string;
    UserName: string;
    FirstName: string;
    LastName: string;
    EmailId: string;
    Mobile: string;
    IsAdmin: boolean;
    RoleName: string;
    DepartmentName: string;
    DesignationName: string;
    DateOfJoining: string;
    FinancialYearId: string;
    RoleId: string;
    AccountType: string;
    LandingPageUrl: string;
    InvalidAttempt: 0
    IsLocked: false
    IsPasswordReset: false
    LastLoginDate: string;
    PasswordExpiredOn: string;
    PasswordResetToken: string;
    PasswordUpdateDate: string;
    TokenExpiredOn: string;
    AuthToken: string;
    AuthTokenWeb: string;
    RoleTransactions: []

    constructor() {
        this.LoginUniqueId = '';
        this.AccountId = '';
        this.LoginId = '';
        this.Password = '';
        this.UserId = '';
        this.UserName = '';
        this.FirstName = '';
        this.LastName = '';
        this.EmailId = '';
        this.Mobile = '';
        this.IsAdmin = false;
        this.RoleName = '';
        this.DepartmentName = '';
        this.DesignationName = '';
        this.DateOfJoining = '';
        this.FinancialYearId = '';
        this.RoleId = '';
        this.AccountType = '';
        this.LandingPageUrl = '';
        this.InvalidAttempt = 0
        this.IsLocked = false;
        this.IsPasswordReset = false;
        this.LastLoginDate = '';
        this.PasswordExpiredOn = '';
        this.PasswordResetToken = '';
        this.PasswordUpdateDate = '';
        this.TokenExpiredOn = '';
        this.AuthToken = '';
        this.AuthTokenWeb = '';
        this.RoleTransactions = [];
    }
}
