import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable()
export class ServiceConstants {
    public BaseUrl: string = environment.ApiBaseUrl;
    public RetryServieNo: number = 0;

    public CommonService = {
        SaveTripSettings: "TripTracker/SaveTripSettings",
        CompressUploadedImages: "TripTracker/CompressUploadedImages",
        CheckSalaryStatus: "SalaryProcessing/CheckSalaryStatus"
    }

    public MasterData = {
        GetAll: "TripTracker/GetMasterDataByType",
        UploadExcelData: "DataUpload/UploadExcelData",
        GetDashboardData: "TripTracker/GetDashboardData",        
        GetUniqueId: "TripTracker/GetUniqueId"
    };

    public DashboardGraphData = {
        GetDashboardSchoolChartData: "Dashboard/GetDashboardSchoolChartData",
        GetDashboardVocationalTrainersCardData: "Dashboard/GetDashboardVocationalTrainersCardData",
        GetDashboardJobRoleUnitsCardData: "Dashboard/GetDashboardJobRoleUnitsCardData",
        GetDashboardSummary: "TripTracker/GetDashboardSummary",
    }

    public AcademicYear = {
        GetAll: "AcademicYear/GetAcademicYears",
        GetAllByCriteria: "AcademicYear/GetAcademicYearsByCriteria",
        GetById: "AcademicYear/GetAcademicYearById",
        CreateOrUpdate: "AcademicYear/CreateOrUpdateAcademicYearDetails",
        Delete: "AcademicYear/DeleteAcademicYearById"
    };

    public Account = {
        GetAll: "Account/GetAccounts",
        GetAllByCriteria: "Account/GetAccountsByCriteria",
        GetById: "Account/GetAccountById",
        GetEmployeeDetailsById: "Employee/GetEmployeeDetailsById",
        CreateOrUpdate: "Account/CreateOrUpdateAccountDetails",
        GetAccountDetailsById: "Account/GetAccountDetailsById",
        GetLogoutHistoriesById: "Account/GetLogoutHistoriesById",
        GetEmployeesByReportingManagerId: "Account/GetEmployeesByReportingManagerId",
        SaveEmployeesforReportingManager: "Account/SaveEmployeesforReportingManager",
        Delete: "Account/DeleteAccountById",
        ChangePassword: "Account/ChangePassword",
        ForgotPassword: "TripTracker/ForgotPassword",
        ResetPassword: "TripTracker/ResetPassword",
        ChangeLogin: "Account/ChangeUserLoginId"
    };

    public Country = {
        GetAll: "Country/GetCountries",
        GetAllByCriteria: "Country/GetCountriesByCriteria",
        GetById: "Country/GetCountryById",
        CreateOrUpdate: "Country/CreateOrUpdateCountryDetails",
        Delete: "Country/DeleteCountryById"
    };

    public State = {
        GetAll: "State/GetStates",
        GetAllByCriteria: "State/GetStatesByCriteria",
        GetById: "State/GetStateById",
        CreateOrUpdate: "State/CreateOrUpdateStateDetails",
        Delete: "State/DeleteStateById"
    };

    public District = {
        GetAll: "District/GetDistricts",
        GetAllByCriteria: "District/GetDistrictsByCriteria",
        GetById: "District/GetDistrictById",
        CreateOrUpdate: "District/CreateOrUpdateDistrictDetails",
        Delete: "District/DeleteDistrictById",
        GetAllByCriteriaTmp: "District/GetDistrictsByCriteriaTmp",
    };

    public Division = {
        GetAll: "Division/GetDivisions",
        GetAllByCriteria: "Division/GetDivisionsByCriteria",
        GetById: "Division/GetDivisionById",
        CreateOrUpdate: "Division/CreateOrUpdateDivisionDetails",
        Delete: "Division/DeleteDivisionById"
    };

    public Block = {
        GetAll: "Block/GetBlocks",
        GetAllByCriteria: "Block/GetBlocksByCriteria",
        GetById: "Block/GetBlockById",
        CreateOrUpdate: "Block/CreateOrUpdateBlockDetails",
        Delete: "Block/DeleteBlockById"
    };

    public Cluster = {
        GetAll: "Cluster/GetClusters",
        GetAllByCriteria: "Cluster/GetClustersByCriteria",
        GetById: "Cluster/GetClusterById",
        CreateOrUpdate: "Cluster/CreateOrUpdateClusterDetails",
        Delete: "Cluster/DeleteClusterById"
    };

    public MonthQuarterYear = {
        GetAll: "MonthQuarterYear/GetMonthQuarterYears",
        GetAllByCriteria: "MonthQuarterYear/GetMonthQuarterYearsByCriteria",
        GetById: "MonthQuarterYear/GetMonthQuarterYearById",
        CreateOrUpdate: "MonthQuarterYear/CreateOrUpdateMonthQuarterYearDetails",
        Delete: "MonthQuarterYear/DeleteMonthQuarterYearById",
        GetAllByCriteriaTmp: "MonthQuarterYear/GetMonthQuarterYearsByCriteriaTmp",
    };

    public TermsCondition = {
        GetAll: "TermsCondition/GetTermsConditions",
        GetAllByCriteria: "TermsCondition/GetTermsConditionsByCriteria",
        GetById: "TermsCondition/GetTermsConditionById",
        CreateOrUpdate: "TermsCondition/CreateOrUpdateTermsConditionDetails",
        Delete: "TermsCondition/DeleteTermsConditionById"
    };

    public Report = {
        GetEmployeeReports: "Report/GetEmployeeReports",
        GetEmployeeSalaryReports: "Report/GetEmployeeSalaryReports",
        GetMonthlyAttendanceReports: "Report/GetMonthlyAttendanceReports",
    };

    public ComplaintRegistration = {
        GetAll: "ComplaintRegistration/GetComplaintRegistrations",
        GetAllByCriteria: "ComplaintRegistration​/GetComplaintRegistrationsByCriteria",
        GetById: "ComplaintRegistration/GetComplaintRegistrationById",
        CreateOrUpdate: "ComplaintRegistration/CreateOrUpdateComplaintRegistrationDetails",
        Delete: "ComplaintRegistration/DeleteComplaintRegistrationById",
    }

    public MessageTemplate = {
        GetAll: "MessageTemplate/GetMessageTemplates",
        GetAllByCriteria: "MessageTemplate/GetMessageTemplatesByCriteria",
        GetById: "MessageTemplate/GetMessageTemplateById",
        CreateOrUpdate: "MessageTemplate/CreateOrUpdateMessageTemplateDetails",
        Delete: "MessageTemplate/DeleteMessageTemplateById"
    };

    public Absconder = {
        GetAll: "Absconder/GetAbsconders",
        GetAllByCriteria: "Absconder/GetAbscondersByCriteria",
        GetById: "Absconder/GetAbsconderById",
        CreateOrUpdate: "Absconder/CreateOrUpdateAbsconderDetails",
        Delete: "Absconder/DeleteAbsconderById"
    };

    public ApplicationDocument = {
        GetAll: "ApplicationDocument/GetApplicationDocuments",
        GetAllByCriteria: "ApplicationDocument/GetApplicationDocumentsByCriteria",
        GetById: "ApplicationDocument/GetApplicationDocumentById",
        CreateOrUpdate: "ApplicationDocument/CreateOrUpdateApplicationDocumentDetails",
        Delete: "ApplicationDocument/DeleteApplicationDocumentById"
    };

    public ApplicationEducation = {
        GetAll: "ApplicationEducation/GetApplicationEducations",
        GetAllByCriteria: "ApplicationEducation/GetApplicationEducationsByCriteria",
        GetById: "ApplicationEducation/GetApplicationEducationById",
        CreateOrUpdate: "ApplicationEducation/CreateOrUpdateApplicationEducationDetails",
        Delete: "ApplicationEducation/DeleteApplicationEducationById"
    };

    public ApplicationExperience = {
        GetAll: "ApplicationExperience/GetApplicationExperiences",
        GetAllByCriteria: "ApplicationExperience/GetApplicationExperiencesByCriteria",
        GetById: "ApplicationExperience/GetApplicationExperienceById",
        CreateOrUpdate: "ApplicationExperience/CreateOrUpdateApplicationExperienceDetails",
        Delete: "ApplicationExperience/DeleteApplicationExperienceById"
    };

    public AppSetting = {
        GetAll: "AppSetting/GetAppSettings",
        GetAllByCriteria: "AppSetting/GetAppSettingsByCriteria",
        GetById: "AppSetting/GetAppSettingById",
        CreateOrUpdate: "AppSetting/CreateOrUpdateAppSettingDetails",
        Delete: "AppSetting/DeleteAppSettingById"
    };

    public Attendance = {
        GetAll: "Attendance/GetAttendances",
        GetAllByCriteria: "Attendance/GetAttendancesByCriteria",
        GetById: "Attendance/GetAttendanceById",
        CreateOrUpdate: "Attendance/CreateOrUpdateAttendanceDetails",
        GetSiteAttendancesById: "Attendance/GetSiteAttendancesById",
        SaveSiteAttendances: "Attendance/SaveSiteAttendances",
        GetMonthlyAttendancesById: "Attendance/GetMonthlyAttendancesById",
        SaveMonthlyAttendances: "Attendance/SaveMonthlyAttendances",
        Delete: "Attendance/DeleteAttendanceById",
        ApproveAttendances: "Attendance/ApproveAttendances"
    };

    public AttendanceLog = {
        GetAll: "AttendanceLog/GetAttendanceLogs",
        GetAllByCriteria: "AttendanceLog/GetAttendanceLogsByCriteria",
        GetById: "AttendanceLog/GetAttendanceLogById",
        CreateOrUpdate: "AttendanceLog/CreateOrUpdateAttendanceLogDetails",
        UploadAttendanceLogs: "AttendanceLog/ImportAttendanceLogs",
        Delete: "AttendanceLog/DeleteAttendanceLogById"
    };

    public AppraisalCriteria = {
        GetAll: "AppraisalCriteria/GetAppraisalCriteria",
        GetAllByCriteria: "AppraisalCriteria/GetAppraisalCriteriaByCriteria",
        GetById: "AppraisalCriteria/GetAppraisalCriteriaById",
        CreateOrUpdate: "AppraisalCriteria/CreateOrUpdateAppraisalCriteriaDetails",
        Delete: "AppraisalCriteria/DeleteAppraisalCriteriaById"
    };

    public BonusIncentive = {
        GetAll: "BonusIncentive/GetBonusIncentives",
        GetAllByCriteria: "BonusIncentive/GetBonusIncentivesByCriteria",
        GetById: "BonusIncentive/GetBonusIncentiveById",
        CreateOrUpdate: "BonusIncentive/CreateOrUpdateBonusIncentiveDetails",
        Delete: "BonusIncentive/DeleteBonusIncentiveById"
    };

    public ClearenceCertificate = {
        GetAll: "ClearenceCertificate/GetClearenceCertificates",
        GetAllByCriteria: "ClearenceCertificate/GetClearenceCertificatesByCriteria",
        GetById: "ClearenceCertificate/GetClearenceCertificateById",
        CreateOrUpdate: "ClearenceCertificate/CreateOrUpdateClearenceCertificateDetails",
        Delete: "ClearenceCertificate/DeleteClearenceCertificateById"
    };

    public DataType = {
        GetAll: "DataType/GetDataTypes",
        GetAllByCriteria: "DataType/GetDataTypesByCriteria",
        GetById: "DataType/GetDataTypeById",
        CreateOrUpdate: "DataType/CreateOrUpdateDataTypeDetails",
        Delete: "DataType/DeleteDataTypeById"
    };

    public DataValue = {
        GetAll: "DataValue/GetDataValues",
        GetAllByCriteria: "DataValue/GetDataValuesByCriteria",
        GetById: "DataValue/GetDataValueById",
        CreateOrUpdate: "DataValue/CreateOrUpdateDataValueDetails",
        Delete: "DataValue/DeleteDataValueById"
    };

    public EmployeeBankDetail = {
        GetAll: "EmployeeBankDetail/GetEmployeeBankDetails",
        GetAllByCriteria: "EmployeeBankDetail/GetEmployeeBankDetailsByCriteria",
        GetById: "EmployeeBankDetail/GetEmployeeBankDetailById",
        CreateOrUpdate: "EmployeeBankDetail/CreateOrUpdateEmployeeBankDetailDetails",
        Delete: "EmployeeBankDetail/DeleteEmployeeBankDetailById"
    };

    public EmployeeDocumentDetail = {
        GetAll: "EmployeeDocumentDetail/GetEmployeeDocumentDetails",
        GetAllByCriteria: "EmployeeDocumentDetail/GetEmployeeDocumentDetailsByCriteria",
        GetById: "EmployeeDocumentDetail/GetEmployeeDocumentDetailById",
        CreateOrUpdate: "EmployeeDocumentDetail/CreateOrUpdateEmployeeDocumentDetailDetails",
        Delete: "EmployeeDocumentDetail/DeleteEmployeeDocumentDetailById"
    };

    public EmployeeEducationDetail = {
        GetAll: "EmployeeEducationDetail/GetEmployeeEducationDetails",
        GetAllByCriteria: "EmployeeEducationDetail/GetEmployeeEducationDetailsByCriteria",
        GetById: "EmployeeEducationDetail/GetEmployeeEducationDetailById",
        CreateOrUpdate: "EmployeeEducationDetail/CreateOrUpdateEmployeeEducationDetailDetails",
        Delete: "EmployeeEducationDetail/DeleteEmployeeEducationDetailById"
    };

    public EmployeeExperienceDetail = {
        GetAll: "EmployeeExperienceDetail/GetEmployeeExperienceDetails",
        GetAllByCriteria: "EmployeeExperienceDetail/GetEmployeeExperienceDetailsByCriteria",
        GetById: "EmployeeExperienceDetail/GetEmployeeExperienceDetailById",
        CreateOrUpdate: "EmployeeExperienceDetail/CreateOrUpdateEmployeeExperienceDetailDetails",
        Delete: "EmployeeExperienceDetail/DeleteEmployeeExperienceDetailById"
    };

    public EmployeeLeave = {
        GetAll: "EmployeeLeave/GetEmployeeLeaves",
        GetAllByCriteria: "EmployeeLeave/GetEmployeeLeavesByCriteria",
        GetById: "EmployeeLeave/GetEmployeeLeaveById",
        CreateOrUpdate: "EmployeeLeave/CreateOrUpdateEmployeeLeaveDetails",
        Delete: "EmployeeLeave/DeleteEmployeeLeaveById"
    };

    public EmployeeLoan = {
        GetAll: "EmployeeLoan/GetEmployeeLoans",
        GetAllByCriteria: "EmployeeLoan/GetEmployeeLoansByCriteria",
        GetById: "EmployeeLoan/GetEmployeeLoanById",
        CreateOrUpdate: "EmployeeLoan/CreateOrUpdateEmployeeLoanDetails",
        Delete: "EmployeeLoan/DeleteEmployeeLoanById",
        GetByEmployeeId: "EmployeeLoan/GetEmployeeLoanDetailsByEmployeeId",
        GetEmployeeLoanSummaryDetailsById: "EmployeeLoan/GetEmployeeLoanSummaryDetailsById",
    };

    public EmployeeLoanSchedule = {
        GetAll: "EmployeeLoanSchedule/GetEmployeeLoanSchedules",
        GetAllByCriteria: "EmployeeLoanSchedule/GetEmployeeLoanSchedulesByCriteria",
        GetById: "EmployeeLoanSchedule/GetEmployeeLoanScheduleById",
        CreateOrUpdate: "EmployeeLoanSchedule/CreateOrUpdateEmployeeLoanScheduleDetails",
        Delete: "EmployeeLoanSchedule/DeleteEmployeeLoanScheduleById"
    };

    public EmployeeResignation = {
        GetAll: "EmployeeResignation/GetEmployeeResignations",
        GetAllByCriteria: "EmployeeResignation/GetEmployeeResignationsByCriteria",
        GetById: "EmployeeResignation/GetEmployeeResignationById",
        GetByEmployeeId: "EmployeeResignation/GetResignationDetailByEmployeeId",
        CreateOrUpdate: "EmployeeResignation/CreateOrUpdateEmployeeResignationDetails",
        Delete: "EmployeeResignation/DeleteEmployeeResignationById"
    };

    public EmployeeOvertimeAllowance = {
        GetAll: "EmployeeOvertimeAllowance/GetEmployeeOvertimeAllowances",
        GetAllByCriteria: "EmployeeOvertimeAllowance/GetEmployeeOvertimeAllowancesByCriteria",
        GetById: "EmployeeOvertimeAllowance/GetEmployeeOvertimeAllowanceById",
        CreateOrUpdate: "EmployeeOvertimeAllowance/CreateOrUpdateEmployeeOvertimeAllowanceDetails",
        Delete: "EmployeeOvertimeAllowance/DeleteEmployeeOvertimeAllowanceById"
    };

    public EmployeeSalaryHold = {
        GetAll: "EmployeeSalaryHold/GetEmployeeSalaryHolds",
        GetAllByCriteria: "EmployeeSalaryHold/GetEmployeeSalaryHoldsByCriteria",
        GetById: "EmployeeSalaryHold/GetEmployeeSalaryHoldById",
        CreateOrUpdate: "EmployeeSalaryHold/CreateOrUpdateEmployeeSalaryHoldDetails",
        ReleasingEmployeeHoldSalaries: "EmployeeSalaryHold/ReleasingEmployeeHoldSalaries",
        Delete: "EmployeeSalaryHold/DeleteEmployeeSalaryHoldById"
    };

    public Employee = {
        GetAll: "Employee/GetEmployees",
        GetAllByCriteria: "Employee/GetEmployeesByCriteria",
        GetById: "Employee/GetEmployeeById",
        CreateOrUpdate: "Employee/CreateOrUpdateEmployeeDetails",
        Delete: "Employee/DeleteEmployeeById",
        GetDesignationSalaryById: "Employee/GetEmployeeDesignationSalaryDetailsByEmployeeId",
        employeeCode: 'Employee/GetNewEmployeeCode'
    };

    public ErrorLog = {
        GetAll: "ErrorLog/GetErrorLogs",
        GetAllByCriteria: "ErrorLog/GetErrorLogsByCriteria",
        GetById: "ErrorLog/GetErrorLogById",
        CreateOrUpdate: "ErrorLog/CreateOrUpdateErrorLogDetails",
        Delete: "ErrorLog/DeleteErrorLogById"
    };

    public ExitClearance = {
        GetAll: "ExitClearance/GetExitClearance",
        GetAllByCriteria: "ExitClearance/GetExitClearancesByCriteria",
        GetById: "ExitClearance/GetExitClearanceById",
        CreateOrUpdate: "ExitClearance/CreateOrUpdateExitClearanceDetails",
        Delete: "ExitClearance/DeleteExitClearanceById"
    }
    public ExitClearanceItems = {
        GetAll: "ExitClearance/GetExitClearanceItems",
        GetAllByCriteria: "ExitClearanceItem/GetExitClearanceItemsByCriteria",
        GetById: "ExitClearanceItem/GetExitClearanceItemById",
        CreateOrUpdate: "ExitClearanceItem/CreateOrUpdateExitClearanceItemDetails",
        Delete: "ExitClearanceItem/DeleteExitClearanceItemById"
    }
    public ExitInterview = {
        GetAll: "ExitInterview/GetExitInterviews",
        GetAllByCriteria: "ExitInterview/GetExitInterviewsByCriteria",
        GetById: "ExitInterview/GetExitInterviewById",
        CreateOrUpdate: "ExitInterview/CreateOrUpdateExitInterviewDetails",
        Delete: "ExitInterview/DeleteExitInterviewById"
    };

    public ExitLetters = {
        GetAll: "ExitLetter/GetExitLetters",
        GetAllByCriteria: "ExitLetter/GetExitLettersByCriteria",
        GetById: "ExitLetter/GetExitLetterById",
        CreateOrUpdate: "ExitLetter/CreateOrUpdateExitLetterDetails",
        Delete: "ExitLetter/DeleteExitLetterById"
    };

    public FeedbackRating = {
        GetAll: "FeedbackRating/GetFeedbackRatings",
        GetAllByCriteria: "FeedbackRating/GetFeedbackRatingsByCriteria",
        GetById: "FeedbackRating/GetFeedbackRatingById",
        CreateOrUpdate: "FeedbackRating/CreateOrUpdateFeedbackRatingDetails",
        Delete: "FeedbackRating/DeleteFeedbackRatingById"
    };

    public FinancialYear = {
        GetAll: "FinancialYear/GetFinancialYears",
        GetAllByCriteria: "FinancialYear/GetFinancialYearsByCriteria",
        GetById: "FinancialYear/GetFinancialYearById",
        CreateOrUpdate: "FinancialYear/CreateOrUpdateFinancialYearDetails",
        Delete: "FinancialYear/DeleteFinancialYearById"
    };

    public FinalSettlement = {
        GetAll: "FeedbackRating/GetFinalSettlements",
        GetAllByCriteria: "FinalSettlement/GetFinalSettlementsByCriteria",
        GetById: "FinalSettlement/GetFinalSettlementById",
        CreateOrUpdate: "FinalSettlement/CreateOrUpdateFinalSettlementDetails",
        Delete: "FinalSettlement/DeleteFinalSettlementById"
    };

    public ForgotPasswordHistory = {
        GetAll: "ForgotPasswordHistory/GetForgotPasswordHistories",
        GetAllByCriteria: "ForgotPasswordHistory/GetForgotPasswordHistoriesByCriteria",
        GetById: "ForgotPasswordHistory/GetForgotPasswordHistoryById",
        CreateOrUpdate: "ForgotPasswordHistory/CreateOrUpdateForgotPasswordHistoryDetails",
        Delete: "ForgotPasswordHistory/DeleteForgotPasswordHistoryById"
    };

    public FullFinalSettlement = {
        GetAll: "FullFinalSettlement/GetFullFinalSettlements",
        GetAllByCriteria: "FullFinalSettlement/GetFullFinalSettlementsByCriteria",
        GetById: "FullFinalSettlement/GetFullFinalSettlementById",
        CreateOrUpdate: "FullFinalSettlement/CreateOrUpdateFullFinalSettlementDetails",
        Delete: "FullFinalSettlement/DeleteFullFinalSettlementById"
    };

    public GoalSettingTracking = {
        GetAll: "GoalSettingTracking/GetGoalSettingTrackings",
        GetAllByCriteria: "GoalSettingTracking/GetGoalSettingTrackingsByCriteria",
        GetById: "GoalSettingTracking/GetGoalSettingTrackingById",
        CreateOrUpdate: "GoalSettingTracking/CreateOrUpdateGoalSettingTrackingDetails",
        Delete: "GoalSettingTracking/DeleteGoalSettingTrackingById"
    };

    public HiringDecesion = {
        GetAll: "HiringDecesion/GetHiringDecesions",
        GetAllByCriteria: "HiringDecesion/GetHiringDecesionsByCriteria",
        GetById: "HiringDecesion/GetHiringDecesionById",
        CreateOrUpdate: "HiringDecesion/CreateOrUpdateHiringDecesionDetails",
        Delete: "HiringDecesion/DeleteHiringDecesionById",
        getJobApplicantHiringDetailsByInterviewId: "HiringDecesion/GetJobApplicantHiringDetailsByInterviewId",
        getJobApplicantHiringDetailsByHiringDecesionId: "HiringDecesion/GetJobApplicantHiringDetailsByHiringDecesionId",
    };

    public InterviewAssessment = {
        GetAll: "InterviewAssessment/GetInterviewAssessments",
        GetAllByCriteria: "InterviewAssessment/GetInterviewAssessmentsByCriteria",
        GetById: "InterviewAssessment/GetInterviewAssessmentById",
        CreateOrUpdate: "InterviewAssessment/CreateOrUpdateInterviewAssessmentDetails",
        Delete: "InterviewAssessment/DeleteInterviewAssessmentById"
    };

    public InterviewReference = {
        GetAll: "InterviewReference/GetInterviewReferences",
        GetAllByCriteria: "InterviewReference/GetInterviewReferencesByCriteria",
        GetById: "InterviewReference/GetInterviewReferenceById",
        CreateOrUpdate: "InterviewReference/CreateOrUpdateInterviewReferenceDetails",
        Delete: "InterviewReference/DeleteInterviewReferenceById"
    };

    public InterviewScheduling = {
        GetAll: "InterviewScheduling/GetInterviewSchedulings",
        GetAllByCriteria: "InterviewScheduling/GetInterviewSchedulingsByCriteria",
        GetById: "InterviewScheduling/GetInterviewSchedulingById",
        CreateOrUpdate: "InterviewScheduling/CreateOrUpdateInterviewSchedulingDetails",
        Delete: "InterviewScheduling/DeleteInterviewSchedulingById"
    };

    public JobAdvertise = {
        GetAll: "JobAdvertise/GetJobAdvertise",
        GetAllByCriteria: "JobAdvertise/GetJobAdvertiseByCriteria",
        GetById: "JobAdvertise/GetJobAdvertiseById",
        GetByRequisitionId: "JobAdvertise/GetJobAdvertiseByRequisitionId",
        CreateOrUpdate: "JobAdvertise/CreateOrUpdateJobAdvertiseDetails",
        Delete: "JobAdvertise/DeleteJobAdvertiseById"
    };

    public JobApplicant = {
        GetAll: "JobApplicant/GetJobApplicants",
        GetAllByCriteria: "JobApplicant/GetJobApplicantsByCriteria",
        GetById: "JobApplicant/GetJobApplicantById",
        CreateOrUpdate: "JobApplicant/CreateOrUpdateJobApplicantDetails",
        Delete: "JobApplicant/DeleteJobApplicantById",
        ApplicantDetailsByApplicantId: "JobApplicant/GetJobApplicantDetailsByApplicantId"
    };

    public JobRequisitionStatus = {
        GetAll: "JobRequisitionStatus/GetJobRequisitionStatus",
        GetAllByCriteria: "JobRequisitionStatus/GetJobRequisitionStatusByCriteria",
        GetById: "JobRequisitionStatus/GetJobRequisitionStatusById",
        CreateOrUpdate: "JobRequisitionStatus/CreateOrUpdateJobRequisitionStatusDetails",
        Delete: "JobRequisitionStatus/DeleteJobRequisitionStatusById"
    };

    public JobRequsition = {
        GetAll: "JobRequsition/GetJobRequsitions",
        GetAllByCriteria: "JobRequsition/GetJobRequsitionsByCriteria",
        GetById: "JobRequsition/GetJobRequsitionById",
        CreateOrUpdate: "JobRequsition/CreateOrUpdateJobRequsitionDetails",
        Delete: "JobRequsition/DeleteJobRequsitionById"
    };

    public JoiningLetter = {
        GetAll: "JoiningLetter/GetJoiningLetters",
        GetAllByCriteria: "JoiningLetter/GetJoiningLettersByCriteria",
        GetById: "JoiningLetter/GetJoiningLetterById",
        CreateOrUpdate: "JoiningLetter/CreateOrUpdateJoiningLetterDetails",
        Delete: "JoiningLetter/DeleteJoiningLetterById",
        MoveEmployee: "JoiningLetter/TransferJobApplicantToEmployee",
        JoiningLetter: "JoiningLetter/JoiningLetter?id="
    };

    public LeaveApplication = {
        GetAll: "LeaveApplication/GetLeaveApplications",
        GetAllByCriteria: "LeaveApplication/GetLeaveApplicationsByCriteria",
        GetById: "LeaveApplication/GetLeaveApplicationById",
        CreateOrUpdate: "LeaveApplication/CreateOrUpdateLeaveApplicationDetails",
        CreateOrUpdateLeaveStatus: "LeaveApplicationStatus/CreateOrUpdateLeaveApplicationStatusDetails",
        Delete: "LeaveApplication/DeleteLeaveApplicationById"
    };

    public LeavePolicy = {
        GetAll: "LeavePolicy/GetLeavePolicies",
        GetAllByCriteria: "LeavePolicy/GetLeavePoliciesByCriteria",
        GetById: "LeavePolicy/GetLeavePolicyById",
        CreateOrUpdate: "LeavePolicy/CreateOrUpdateLeavePolicyDetails",
        Delete: "LeavePolicy/DeleteLeavePolicyById"
    };

    public LogoutHistory = {
        GetAll: "LogoutHistory/GetLogoutHistories",
        GetAllByCriteria: "LogoutHistory/GetLogoutHistoriesByCriteria",
        GetById: "LogoutHistory/GetLogoutHistoryById",
        CreateOrUpdate: "LogoutHistory/CreateOrUpdateLogoutHistoryDetails",
        Delete: "LogoutHistory/DeleteLogoutHistoryById"
    };

    public ManagerAssessment = {
        GetAll: "ManagerAssessment/GetManagerAssessments",
        GetAllByCriteria: "ManagerAssessment/GetManagerAssessmentsByCriteria",
        GetById: "ManagerAssessment/GetManagerAssessmentById",
        CreateOrUpdate: "ManagerAssessment/CreateOrUpdateManagerAssessmentDetails",
        Delete: "ManagerAssessment/DeleteManagerAssessmentById"
    };

    public Negotiation = {
        GetAll: "ManagerAssessment/GetManagerAssessments",
        GetAllByCriteria: "EmployeeNegotiation/GetEmployeeNegotiationsByCriteria",
        GetById: "EmployeeNegotiation/GetEmployeeNegotiationById",
        CreateOrUpdate: "EmployeeNegotiation/CreateOrUpdateEmployeeNegotiationDetails",
        Delete: "EmployeeNegotiation/DeleteEmployeeNegotiationById"
    };

    public OfferLetterGeneration = {
        GetAll: "OfferLetterGeneration/GetOfferLetterGenerations",
        GetAllByCriteria: "OfferLetterGeneration/GetOfferLetterGenerationsByCriteria",
        GetById: "OfferLetterGeneration/GetOfferLetterGenerationById",
        CreateOrUpdate: "OfferLetterGeneration/CreateOrUpdateOfferLetterGenerationDetails",
        Delete: "OfferLetterGeneration/DeleteOfferLetterGenerationById",
        OfferLetter: "OfferLetterGeneration/OfferLetter?id="
    };

    public OnBoardingChecklist = {
        GetAll: "OnBoardingChecklist/GetOnBoardingChecklists",
        GetAllByCriteria: "OnBoardingChecklist/GetOnBoardingChecklistsByCriteria",
        GetById: "OnBoardingChecklist/GetOnBoardingChecklistById",
        CreateOrUpdate: "OnBoardingChecklist/CreateOrUpdateOnBoardingChecklistDetails",
        Delete: "OnBoardingChecklist/DeleteOnBoardingChecklistById"
    };

    public Product = {
        GetAll: "Product/GetProducts",
        GetAllByCriteria: "Product/GetProductsByCriteria",
        GetById: "Product/GetProductById",
        CreateOrUpdate: "Product/CreateOrUpdateProductDetails",
        Delete: "Product/DeleteProductById"
    };

    public Project = {
        GetAll: "Project/GetProjects",
        GetAllByCriteria: "Project/GetProjectsByCriteria",
        GetById: "Project/GetProjectById",
        CreateOrUpdate: "Project/CreateOrUpdateProjectDetails",
        Delete: "Project/DeleteProjectById"
    };

    public PromotionAppraisal = {
        GetAll: "PromotionAppraisal/GetPromotionAppraisals",
        GetAllByCriteria: "PromotionAppraisal/GetPromotionAppraisalsByCriteria",
        GetById: "PromotionAppraisal/GetPromotionAppraisalById",
        CreateOrUpdate: "PromotionAppraisal/CreateOrUpdatePromotionAppraisalDetails",
        Delete: "PromotionAppraisal/DeletePromotionAppraisalById"
    };

    public QueryLog = {
        GetAll: "QueryLog/GetQueryLogs",
        GetAllByCriteria: "QueryLog/GetQueryLogsByCriteria",
        GetById: "QueryLog/GetQueryLogById",
        CreateOrUpdate: "QueryLog/CreateOrUpdateQueryLogDetails",
        Delete: "QueryLog/DeleteQueryLogById"
    };

    public Role = {
        GetAll: "Role/GetRoles",
        GetAllByCriteria: "Role/GetRolesByCriteria",
        GetById: "Role/GetRoleById",
        CreateOrUpdate: "Role/CreateOrUpdateRoleDetails",
        Delete: "Role/DeleteRoleById"
    };

    public RoleTransaction = {
        GetAll: "RoleTransaction/GetRoleTransactions",
        GetAllByCriteria: "RoleTransaction/GetRoleTransactionsByCriteria",
        GetById: "RoleTransaction/GetRoleTransactionById",
        CreateOrUpdate: "RoleTransaction/CreateOrUpdateRoleTransactionDetails",
        Delete: "RoleTransaction/DeleteRoleTransactionById"
    };

    public SalaryProcessing = {
        GetAll: "SalaryProcessing/GetSalaryProcessings",
        GetAllByCriteria: "SalaryProcessing/GetSalaryProcessingsByCriteria",
        GetById: "SalaryProcessing/GetSalaryProcessingById",
        CreateOrUpdate: "SalaryProcessing/CreateOrUpdateSalaryProcessingDetails",
        Delete: "SalaryProcessing/DeleteSalaryProcessingById",
        BulkSalaryProcessingForEmployees: "SalaryProcessing/BulkSalaryProcessingForEmployees",
        CheckPayrollFinalizedForMonth: "SalaryProcessing/CheckPayrollFinalizedForMonthAsync",
        GetAllSalaryforFreeze: "SalaryProcessing/GetSalaryProcessingsforFreeze",
        UpdateSalaryStatus: "SalaryProcessing/UpdateSalaryStatus",
        SalaryPaySlip: "SalaryProcessing/SalaryPaySlip?id=",
        GetEmployeePreviousMonthHeldSalaryById: "SalaryProcessing/GetEmployeePreviousMonthHeldSalaryById",
    };

    public SalaryStructure = {
        GetAll: "SalaryStructure/GetSalaryStructures",
        GetAllByCriteria: "SalaryStructure/GetSalaryStructuresByCriteria",
        GetById: "SalaryStructure/GetSalaryStructureById",
        GetByEmployeeId: "SalaryStructure/GetSalaryStructureByEmployeeId",
        GetSalaryDetailsByEmployeeId: "SalaryStructure/GetSalaryStructureDetailsByEmployeeId",
        CreateOrUpdate: "SalaryStructure/CreateOrUpdateSalaryStructureDetails",
        Delete: "SalaryStructure/DeleteSalaryStructureById"
    };

    public SelfAssessment = {
        GetAll: "SelfAssessment/GetSelfAssessments",
        GetAllByCriteria: "SelfAssessment/GetSelfAssessmentsByCriteria",
        GetById: "SelfAssessment/GetSelfAssessmentById",
        CreateOrUpdate: "SelfAssessment/CreateOrUpdateSelfAssessmentDetails",
        Delete: "SelfAssessment/DeleteSelfAssessmentById"
    };

    public SiteHeader = {
        GetAll: "SiteHeader/GetSiteHeaders",
        GetAllByCriteria: "SiteHeader/GetSiteHeadersByCriteria",
        GetById: "SiteHeader/GetSiteHeaderById",
        CreateOrUpdate: "SiteHeader/CreateOrUpdateSiteHeaderDetails",
        Delete: "SiteHeader/DeleteSiteHeaderById"
    };

    public SiteSubHeader = {
        GetAll: "SiteSubHeader/GetSiteSubHeaders",
        GetAllByCriteria: "SiteSubHeader/GetSiteSubHeadersByCriteria",
        GetById: "SiteSubHeader/GetSiteSubHeaderById",
        CreateOrUpdate: "SiteSubHeader/CreateOrUpdateSiteSubHeaderDetails",
        Delete: "SiteSubHeader/DeleteSiteSubHeaderById"
    };

    public Transaction = {
        GetAll: "Transaction/GetTransactions",
        GetAllByCriteria: "Transaction/GetTransactionsByCriteria",
        GetById: "Transaction/GetTransactionById",
        CreateOrUpdate: "Transaction/CreateOrUpdateTransactionDetails",
        Delete: "Transaction/DeleteTransactionById"
    };
};
