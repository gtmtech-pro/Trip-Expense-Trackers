export class TripSettingModel {
    AppVersion: string;
    SupportEmail: string;
    ApiBaseUrl: string;
    PageSizeMasters: number;
    PageSizeReports: number;
    OTPExpireInMinutes: number;

    SessionTimeoutInMinutes: number;
    PasswordExpireInDays: number;
    NotifyPasswordExpireInDays: number;

    WatermarkText: string;
    CompressImageSize: string;
    TestToMobile: string;
    TestToEmail: string;
    MaxAttendanceDate: number;
    MinAttendanceDate: number;

    constructor() {
        this.AppVersion = '1.0.5';
        this.SupportEmail = 'rakesh.gtmcs@gmail.com';
        this.ApiBaseUrl = 'http://localhost:5085/Services/';
        this.PageSizeMasters = 25;
        this.PageSizeReports = 200;
        this.OTPExpireInMinutes = 0;
        this.PasswordExpireInDays = 0;
        this.NotifyPasswordExpireInDays = 0;
        this.SessionTimeoutInMinutes = 0;
        this.WatermarkText = '';
        this.CompressImageSize = '';
        this.TestToMobile = '';
        this.TestToEmail = '';
        this.MaxAttendanceDate = 0;
        this.MinAttendanceDate = 0;
    }
}
