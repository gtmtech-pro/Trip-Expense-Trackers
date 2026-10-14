import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { BaseService } from './base.service';
import { AuthenticationService } from "../core/services/auth.service";

@Injectable({
    providedIn: "root"
})
export class CommonService extends BaseService {
    private secretKey: string = 'GtmTech^Trip%Service@Oct^20#26';

    constructor(override http: HttpClient,
        override httpHandler: HttpHandler,
        //public dialog: MatDialog,
        public authenticationService: AuthenticationService) {
        super(http, httpHandler);
    }
}
