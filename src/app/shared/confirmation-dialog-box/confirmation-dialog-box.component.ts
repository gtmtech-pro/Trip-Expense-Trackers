import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog-box',
  templateUrl: './confirmation-dialog-box.component.html',
  styleUrls: ['./confirmation-dialog-box.component.scss'],
  standalone: false
})
export class ConfirmationDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit(): void {
  }
  teamForm!: FormGroup;
  closeDialog() {
    this.dialogRef.close(false);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }
  saveOrUpdateJobRequisitionStatusDetails() {
    this.dialogRef.close(true);
  }
}
