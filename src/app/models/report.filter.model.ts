export class ReportFilterModel {
    AcademicYearId: string;
    DistrictId: string;
    PageIndex: number;
    PageSize: number;
    IgnoreCriteria: boolean;

    constructor() {
        this.AcademicYearId = '';
        this.DistrictId = '';
        this.PageIndex = 1;
        this.PageSize = 10000;
        this.IgnoreCriteria = true;
    }
}
