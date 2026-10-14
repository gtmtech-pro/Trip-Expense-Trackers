export const RouteConstants = {
    Login: 'login',
    Home: 'home',
    Sample: 'sample',
    Settings: 'settings',
    PageNotFound: 'page-not-found',

    AcademicYear: {
        List: 'academic-years',
        New: 'academic-years/:actionType',
        Edit: 'academic-years/:actionType/:academicYearId'
    },
    Account: {
        List: 'admins/accounts',
        New: 'admins/accounts/:actionType',
        Edit: 'admins/accounts/:actionType/:accountId',
        AssignReportingManager: 'admins/assign-reporting-manager',
        UserProfile: 'user/profile',
        ChangePassword: 'user/change-password',
        ForgotPassword: 'user/forgot-password',
        ResetPassword: 'user/reset-password',
        ResetPasswordByToken: 'user/reset-password/:accessToken',
        ChangeLogin: 'user/change-login',
    },
    Country: {
        List: 'countries',
        New: 'countries/:actionType',
        Edit: 'countries/:actionType/:countryCode'
    },
    State: {
        List: 'states',
        New: 'states/:actionType',
        Edit: 'states/:actionType/:stateCode'
    },
    District: {
        List: 'districts',
        New: 'districts/:actionType',
        Edit: 'districts/:actionType/:districtCode'
    },
    Division: {
        List: 'divisions',
        New: 'divisions/:actionType',
        Edit: 'divisions/:actionType/:divisionId'
    },
    Block: {
        List: 'blocks',
        New: 'blocks/:actionType',
        Edit: 'blocks/:actionType/:blockId'
    },
    Cluster: {
        List: 'clusters',
        New: 'clusters/:actionType',
        Edit: 'clusters/:actionType/:clusterId'
    },
    Phase: {
        List: 'phases',
        New: 'phases/:actionType',
        Edit: 'phases/:actionType/:phaseId'
    },
    TermsCondition: {
        List: 'terms-conditions',
        New: 'terms-conditions/:actionType',
        Edit: 'terms-conditions/:actionType/:termsConditionId'
    },
    Report: {
        GetEmployeeReports: 'report/employee-reports',
        GetEmployeeSalaryReports: 'report/employee-salary-reports',
        GetMonthlyAttendanceReports: 'report/monthly-attendance-reports',
        GetEmployeePayrollReports: 'report/employee-payroll-reports',
        GetEmployeePFContributionReport: 'report/employee-pf-contribution-reports',
        GetEmployeePTDeductionReport: 'report/employee-pt-deduction-reports',
        GetEmployeeESICContributionReport: 'report/employee-esic-contribution-reports',
        GetEmployeeSalarySheetReport: 'report/employee-salary-sheet-report',
    },
    SummaryDashboard: {
        HRMSDashboard: 'dashboards/hrms-dashboard',
        AttendanceDashboard: 'dashboards/attendance-dashboard'
    },
    FolderAccess: {
        VTMonthlyAttendancePDF: 'Reports/VTMonthlyAttendancePDF',
        DataUpload: 'data-upload'
    },
    BroadcastMessages: {
        List: 'broadcast-messages',
        New: 'broadcast-messages/:actionType',
        Edit: 'broadcast-messages/:actionType/:broadcastMessagesId'
    },
    ComplaintRegistration: {
        List: 'complaint-registrations',
        New: 'complaint-registration',
        Edit: 'complaint-registration/:actionType/:complaintRegistrationId'
    },
    MessageTemplates: {
        List: 'message-templates',
        New: 'message-templates/:actionType',
        Edit: 'message-templates/:actionType/:messageTemplateId'
    },
    PrivacyPolicy: {
        List: 'privacy-policy',
    },

    Absconder: {
        List: 'hrms/absconders',
        New: 'hrms/absconders/:actionType',
        Edit: 'hrms/absconders/:actionType/:absconderId'
    },
    AppSetting: {
        List: 'app-settings',
        New: 'app-settings/:actionType',
        Edit: 'app-settings/:actionType/:settingId'
    },
    Attendance: {
        List: 'hrms/attendances',
        New: 'hrms/attendances/:actionType',
        Edit: 'hrms/attendances/:actionType/:attendanceId',
        SiteAttendances: 'hrms/site-attendances',
        MonthlyAttendances: 'hrms/monthly-attendances',
        ApproveAttendances: 'hrms/attendance-approvals'
    },
    AttendanceLog: {
        List: 'admins/attendance-logs',
        New: 'admins/attendance-logs/:actionType',
        Edit: 'admins/attendance-logs/:actionType/:attendanceLogId'
    },
    BonusIncentive: {
        List: 'hrms/bonus-incentives',
        New: 'hrms/bonus-incentives/:actionType',
        Edit: 'hrms/bonus-incentives/:actionType/:bonusIncentiveId'
    },
    ClearenceCertificate: {
        List: 'hrms/clearence-certificates',
        New: 'hrms/clearence-certificates/:actionType',
        Edit: 'hrms/clearence-certificates/:actionType/:clearanceId'
    },
    DataType: {
        List: 'masters/data-types',
        New: 'masters/data-types/:actionType',
        Edit: 'masters/data-types/:actionType/:dataTypeId'
    },
    DataValue: {
        List: 'masters/data-values',
        New: 'masters/data-values/:actionType',
        Edit: 'masters/data-values/:actionType/:dataValueId'
    },
    AppraisalCriteria: {
        List: 'masters/appraisal-criteria',
        New: 'masters/appraisal-criteria/:actionType',
        Edit: 'masters/appraisal-criteria/:actionType/:appraisalCriteriaId'
    },
    EmployeeLeave: {
        List: 'hrms/employee-leaves',
        New: 'hrms/employee-leaves/:actionType',
        Edit: 'hrms/employee-leaves/:actionType/:leaveStructureId'
    },
    EmployeeLoan: {
        List: 'hrms/employee-loans',
        New: 'hrms/employee-loans/:actionType',
        Edit: 'hrms/employee-loans/:actionType/:employeeLoanId'
    },
    EmployeeLoanSchedule: {
        List: 'hrms/employee-loan-schedules',
        New: 'hrms/employee-loan-schedules/:actionType',
        Edit: 'hrms/employee-loan-schedules/:actionType/:employeeLoanTransactionId'
    },
    EmployeeResignation: {
        List: 'hrms/employee-resignations',
        New: 'hrms/employee-resignations/:actionType',
        Edit: 'hrms/employee-resignations/:actionType/:resignationId'
    },
    EmployeeOvertimeAllowance: {
        List: 'hrms/employee-overtime-allowances',
        New: 'hrms/employee-overtime-allowances/:actionType',
        Edit: 'hrms/employee-overtime-allowances/:actionType/:employeeOvertimeAllowanceId'
    },
    EmployeeSalaryHold: {
        List: 'hrms/employee-salary-holds',
        New: 'hrms/employee-salary-holds/:actionType',
        Edit: 'hrms/employee-salary-holds/:actionType/:employeeSalaryHoldId'
    },
    Employee: {
        List: 'hrms/employees',
        New: 'hrms/employees/:actionType',
        Edit: 'hrms/employees/:actionType/:employeeId'
    },
    ErrorLog: {
        List: 'error-logs',
        New: 'error-logs/:actionType',
        Edit: 'error-logs/:actionType/:errorLogId'
    },
    ExitClearance: {
        List: 'hrms/exit-clearance',
        New: 'hrms/exit-clearance/:actionType',
        Edit: 'hrms/exit-clearance/:actionType/:exitClearanceId'
    },
    ExitClearanceItems: {
        List: 'hrms/exit-clearance-items',
        ByclearanceId: 'hrms/exit-clearance-items/:clearanceId',
        New: 'hrms/exit-clearance-items/:actionType/:clearanceId',
        Edit: 'hrms/exit-clearance-items/:actionType/:clearanceItemId'
    },
    ExitLetters: {
        List: 'hrms/exit-letters',
        New: 'hrms/exit-letters/:actionType',
        Edit: 'hrms/exit-letters/:actionType/:exitLetterId'
    },

    ExitInterview: {
        List: 'hrms/exit-interviews',
        New: 'hrms/exit-interviews/:actionType',
        Edit: 'hrms/exit-interviews/:actionType/:exitInterviewId'
    },
    FeedbackRating: {
        List: 'hrms/feedback-ratings',
        New: 'hrms/feedback-ratings/:actionType',
        Edit: 'hrms/feedback-ratings/:actionType/:feedbackRatingId'
    },
    FinalSettlement: {
        List: 'hrms/final-settlement',
        New: 'hrms/final-settlement/:actionType',
        Edit: 'hrms/final-settlement/:actionType/:finalSettlementId'
    },
    FinancialYear: {
        List: 'masters/financial-years',
        New: 'masters/financial-years/:actionType',
        Edit: 'masters/financial-years/:actionType/:financialYearId'
    },
    FullFinalSettlement: {
        List: 'hrms/full-final-settlements',
        New: 'hrms/full-final-settlements/:actionType',
        Edit: 'hrms/full-final-settlements/:actionType/:fnfSettlementId'
    },
    GoalSettingTracking: {
        List: 'hrms/goal-setting-tracking',
        New: 'hrms/goal-setting-tracking/:actionType',
        Edit: 'hrms/goal-setting-tracking/:actionType/:goalId'
    },
    HiringDecesion: {
        List: 'hrms/hiring-decesions',
        interviewHiringDecesions: 'hrms/hiring-decesions/:interviewId',
        New: 'hrms/hiring-decesions/:actionType/:interviewId',
        Edit: 'hrms/hiring-decesions/:actionType/:hiringDecesionId'
    },
    InterviewAssessment: {
        List: 'hrms/interview-assessments',
        interviewAssessment: 'hrms/interview-assessments/:interviewId/:applicantId',
        New: 'hrms/interview-assessments/:actionType/:interviewId/:applicantId',
        Edit: 'hrms/interview-assessments/:actionType/:interviewAssessmentId/:applicantId'
    },
    InterviewReference: {
        List: 'hrms/interview-references',
        New: 'hrms/interview-references/:actionType',
        Edit: 'hrms/interview-references/:actionType/:interviewReferenceId'
    },
    InterviewScheduling: {
        List: 'hrms/interview-scheduling',
        InterviewSchedulings: 'hrms/interview-scheduling/:applicationId',
        New: 'hrms/interview-scheduling/:actionType/:applicationId',
        Edit: 'hrms/interview-scheduling/:actionType/:interviewId'
    },
    JobAdvertise: {
        List: 'hrms/job-advertises',
        Requisitions: 'hrms/job-advertises/:requisitionId',
        New: 'hrms/job-advertises/actionType/:requisitionId',
        Edit: 'hrms/job-advertises/:actionType/:jobAdvertiseId',
    },
    JobApplicant: {
        List: 'hrms/job-applicants',
        Advertises: 'hrms/advertises/job-applicants/:jobAdvertiseId',
        New: 'hrms/job-applicants/:actionType/:jobAdvertiseId',
        Edit: 'hrms/job-applicants/:actionType/:applicationId',
    },
    JobRequisitionStatus: {
        List: 'hrms/job-requisition-status',
        New: 'hrms/job-requisition-status/:actionType',
        Edit: 'hrms/job-requisition-status/:actionType/:requisitionStatusId'
    },
    JobRequsition: {
        List: 'hrms/job-requsitions',
        New: 'hrms/job-requsitions/:actionType',
        Edit: 'hrms/job-requsitions/:actionType/:requisitionId'
    },
    JoiningLetter: {
        List: 'hrms/joining-letters',
        JoiningLetter: 'hrms/joining-letters/:hiringDecesionId/:offerLetterId',
        New: 'hrms/joining-letters/:actionType',
        Edit: 'hrms/joining-letter/:actionType/:joiningLetterId',
    },
    LeaveApplication: {
        List: 'hrms/leave-applications',
        New: 'hrms/leave-applications/:actionType',
        Edit: 'hrms/leave-applications/:actionType/:leaveApplicationId'
    },
    LeavePolicy: {
        List: 'hrms/leave-policies',
        New: 'hrms/leave-policies/:actionType',
        Edit: 'hrms/leave-policies/:actionType/:leavePolicyId'
    },
    ManagerAssessment: {
        List: 'hrms/manager-assessments',
        New: 'hrms/manager-assessments/:actionType',
        Edit: 'hrms/manager-assessments/:actionType/:managerAssessmentId/:selfAssessmentId'
    },
    Negotiation: {
        List: 'hrms/negotiations',
        New: 'hrms/negotiations/:actionType',
        Edit: 'hrms/negotiations/:actionType/:NegotiationId'
    },
    OfferLetterGeneration: {
        List: 'hrms/offer-letter-generations',
        OfferLetter: 'hrms/offer-letter-generations/:hiringDecesionId/:interviewId',
        New: 'hrms/offer-letter-generations/:actionType',
        Edit: 'hrms/offer-letter-generation/:actionType/:offerId'
    },
    OnBoardingChecklist: {
        List: 'hrms/onboarding-checklist',
        New: 'hrms/onboarding-checklist/:actionType',
        Edit: 'hrms/onboarding-checklist/:actionType/:checklistId'
    },
    Product: {
        List: 'hrms/products',
        New: 'hrms/products/:actionType',
        Edit: 'hrms/products/:actionType/:productId'
    },
    Project: {
        List: 'hrms/projects',
        New: 'hrms/projects/:actionType',
        Edit: 'hrms/projects/:actionType/:projectId'
    },
    PromotionAppraisal: {
        List: 'hrms/promotion-appraisals',
        New: 'hrms/promotion-appraisals/:actionType',
        Edit: 'hrms/promotion-appraisals/:actionType/:promotionAppraisalId'
    },
    QueryLog: {
        List: 'hrms/query-logs',
        New: 'hrms/query-logs/:actionType',
        Edit: 'hrms/query-logs/:actionType/:queryLogId'
    },
    Role: {
        List: 'settings/roles',
        New: 'settings/roles/:actionType',
        Edit: 'settings/roles/:actionType/:roleId'
    },
    RoleTransaction: {
        List: 'settings/role-transactions',
        New: 'settings/role-transactions/:actionType',
        Edit: 'settings/role-transactions/:actionType/:roleTransactionId'
    },
    SalaryProcessing: {
        List: 'hrms/salary-processing',
        New: 'hrms/salary-processing/:actionType',
        Edit: 'hrms/salary-processing/:actionType/:salaryProcessingId',
        Freeze: 'hrms/freeze-salary-processing'
    },
    SalaryStructure: {
        List: 'hrms/salary-structures',
        New: 'hrms/salary-structures/:actionType',
        Edit: 'hrms/salary-structures/:actionType/:salaryStructureId'
    },
    SelfAssessment: {
        List: 'hrms/self-assessments',
        New: 'hrms/self-assessments/:actionType',
        Edit: 'hrms/self-assessments/:actionType/:selfAssessmentId'
    },
    SiteHeader: {
        List: 'settings/site-headers',
        New: 'settings/site-headers/:actionType',
        Edit: 'settings/site-headers/:actionType/:siteHeaderId'
    },
    SiteSubHeader: {
        List: 'settings/site-sub-headers',
        New: 'settings/site-sub-headers/:actionType',
        Edit: 'settings/site-sub-headers/:actionType/:siteSubHeaderId'
    },
    Transaction: {
        List: 'settings/transactions',
        New: 'settings/transactions/:actionType',
        Edit: 'settings/transactions/:actionType/:transactionId'
    }
}
