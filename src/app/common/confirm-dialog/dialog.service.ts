import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { ShowDialogComponent } from "../show-dialog/show-dialog.component";
import { ConfirmationDialogBoxComponent } from "../confirmation-dialog-box/confirmation-dialog-box.component";

@Injectable({
    providedIn: "root"
})
export class DialogService {
    constructor(public dialog: MatDialog) { }

    openConfirmDialog(confirmMessage: string) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return this.dialog.open(ConfirmDialogComponent, {
            width: "520px",
            disableClose: true,
            panelClass: ["confirm-dialog-container"],
            data: {
                message: confirmMessage,
                title: 'Data Deletion Confirmation'
            }
        });
    }

    openConfirmDialogWithTitle(confirmMessage: string, titleText: string) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return this.dialog.open(ConfirmDialogComponent, {
            width: "450px",
            disableClose: true,
            panelClass: ["confirm-dialog-container"],
            data: {
                message: confirmMessage,
                title: titleText
            }
        });
    }

    openShowDialog(msg: string) {
        return this.dialog.open(ShowDialogComponent, {
            disableClose: true,
            panelClass: ["show-dialog-container"],
            position: { left: '20vw' },
            data: {
                message: msg
            }
        });
    }

    openConfirmationDialogBox(title: string, msg: string) {
        return this.dialog.open(ConfirmationDialogBoxComponent, {
            width: "450px",
            disableClose: true,
            panelClass: ["confirm-dialog-container"],
            data: {
                heading: title,
                message: msg
            }
        });
    }
}
