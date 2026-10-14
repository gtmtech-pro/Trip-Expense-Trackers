import { Injectable } from "@angular/core";

@Injectable()
export class MessageConstants {
    public RecordSavedMessage: string = "Record saved successfully";
    public DeleteConfirmationMessage: string = "Are you sure to delete this record?";
    public ApproveConfirmationMessage: string = "Are you sure to approve selected attendances?";
    public RejectConfirmationMessage: string = "Are you sure to reject selected attendances?";
    public RecordDeletedMessage: string = "Record deleted successfully";
    public NoDataFoundMessage: string = "No data found...!!";
    public PasswordChangeMessage: string = "Password Change successfully";
    public ChangeLoginIdMessage: string = "Change user LoginId successfully";
    public EmailSentForgotPasswordMessage: string = "Check your inbox and click on the link to reset your password.";
    public ResetPasswordSuccessMessage: string = "Your password has been successfully changed.";
    public ResetPasswordFailureMessage: string = "Sorry, looks like the reset code has already been used or has expired.";
    public DefaultImageText: string = "Is default Image?";
    public MoveEmployeeConfirmationMessage: string = "Are you sure you want to add this candidate as employee?";
    public ConvertedEmploye: string = "Employee Created Successfully";
    public AttendanceLogsMessage: string = "AttendanceLogs uploaded successfully";
    public FreezeConfirm: string = "Are you sure you want to freeze the salary for all selected employees?";
    public ProcessConfirm: string = "Are you sure you want to process the salary for all selected employees?";
    public HoldConfirm: string = "Are you sure you want to put the salary on hold for all selected employees?";
    public ReleasedConfirm: string = "Are you sure you want to release the held salary for all selected employees?";
    public FreezeSuccess: string = "Salary has been frozen successfully for all selected employees.";
    public ProcessSuccess: string = "Salary has been processed successfully for all selected employees.";
    public HoldSuccess: string = "Salary has been put on hold successfully for all selected employees.";
    public ReleasedSuccess: string = "Held salary has been released successfully for all selected employees.";
    public SelectAtLeastOneRecord: string = "Please select at least one record";
    public CommonError: string = "Unable to complete the requested action. Please try again.";
}
