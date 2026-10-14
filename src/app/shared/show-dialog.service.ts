import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ShowDialogComponent } from "./show-dialog/show-dialog.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ConfirmationDialogBoxComponent } from "./confirmation-dialog-box/confirmation-dialog-box.component";

@Injectable({
    providedIn: "root"
})
export class ShowDialogService {
    constructor(public dialog: MatDialog) { }

    openShowDialog(msg: string) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        return this.dialog.open(ShowDialogComponent, {
            width: "350px",
            disableClose: true,
            panelClass: ["show-dialog-container"],
            position: { left: '40%' },
            data: {
                message: msg
            }
        });
    }

    openConfirmDialog(confirmMessage: string, titleText: string) {
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

    openConfirmationDialogBox(title: string, msg: string) {
        window.scrollTo({ top: 0, behavior: 'smooth' });

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
