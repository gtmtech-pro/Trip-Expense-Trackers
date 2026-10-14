import { Injectable } from '@angular/core';
import { retry, catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { BaseService } from '../../services/base.service';
import { UserModel } from '../../models/user.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({ providedIn: 'root' })

/**
 * Auth-service Component
 */
export class AuthenticationService {
    private userSubject: BehaviorSubject<UserModel>;
    public currentUserModel: Observable<UserModel>;
    public currentUserValue: any;

    private currentUserSubject: BehaviorSubject<UserModel>;


    constructor(private http: BaseService, private store: Store) {
        this.currentUserSubject = new BehaviorSubject<UserModel>(JSON.parse(window.sessionStorage.getItem('currentUser')!));
        // this.currentUser = this.currentUserSubject.asObservable();

        var currentUserJson = window.sessionStorage.getItem('currentUser')!;
        this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(currentUserJson));
        this.currentUserModel = this.userSubject.asObservable();
    }

    public get authUser(): UserModel {
        return this.userSubject.value;
    }
     
    /**
     * Logout the user
     */
    logout() {
        this.resetLogin();
        window.sessionStorage.removeItem('currentUser');
        window.sessionStorage.removeItem('token');
        this.currentUserSubject.next(null!);

        return of(undefined).pipe();
    }

    loginUser(formData: any): Observable<any> {
        return this.http
            .HttpPost("User/LoginByUserId", formData)
            .pipe(
                retry(this.http.Services.RetryServieNo),
                catchError(this.handleError),
                tap((logResp: any) => {
                    this.userSubject.next(logResp.Result);
                    return logResp;
                })
            );
    }

    logoutUser(formData: any): Observable<any> {
        return this.http
            .HttpPost("User/LogoutByUserId", formData)
            .pipe(
                retry(this.http.Services.RetryServieNo),
                catchError(this.handleError),
                tap((logResp: any) => {
                    this.userSubject.next(logResp.Result);
                    return logResp;
                })
            );
    }

    getUserTransactionsById(formData: any): Observable<any> {
        return this.http
            .HttpPost("User/GetUserTransactionsById", formData)
            .pipe(
                retry(this.http.Services.RetryServieNo),
                catchError(this.handleError),
                tap((tranResp: any) => {
                    return tranResp;
                })
            );
    }

    getTripSettings(settingType: any): Observable<any> {
        let formData = { DataId: settingType }

        return this.http.HttpPost("TripTracker/GetTripsSettings", formData)
            .pipe(
                retry(this.http.Services.RetryServieNo),
                catchError(this.handleError),
                tap((tranResp: any) => {
                    return tranResp;
                })
            );
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = "Unknown error!";
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        //window.alert(errorMessage);
        return throwError(errorMessage);
    }

    getCurrentUser(): UserModel | null {
        var currentUserJson = window.sessionStorage.getItem('currentUser');
        return (currentUserJson != undefined) ? JSON.parse(currentUserJson) : null;
    }

    getUserRoleTransactions(): any {
        var userNavigationJson = window.sessionStorage.getItem('userRoleTransactions');
        return (userNavigationJson != undefined) ? JSON.parse(userNavigationJson) : [];
    }

    getSiteHeaderNavigations(): any {
        var siteHeaderJson = window.sessionStorage.getItem('siteHeaderNavigations');
        return (siteHeaderJson != undefined) ? JSON.parse(siteHeaderJson) : [];
    }

    resetLogin() {
        // remove user from local storage to log user out
        window.sessionStorage.removeItem('currentUser');
        window.sessionStorage.removeItem('userRoleTransactions');
        window.sessionStorage.clear();

        //this.userSubject.next(null!);
        this.userSubject.next(new UserModel());
    }

    getIPAddress(): Observable<any> {
        return this.http.get("http://api.ipify.org/?format=json").pipe(
            retry(this.http.Services.RetryServieNo),
            catchError(this.handleError),
            tap(response => {
                return response;
            })
        );

        // return this.http
        //     .get('http://freegeoip.net/json/?callback')
        //     .map(response => response || {})
        //     .catch(this.handleError);
    }

    getTransactionsAndSettings(loginModel: any): Observable<any[]> {
        let settingRequest = this.getTripSettings('Web');
        let transactionRequest = this.getUserTransactionsById(loginModel);
        let siteHeaderRequest = this.http.GetMasterDataByType({ DataType: 'SiteHeaders' });

        // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
        return forkJoin([settingRequest, transactionRequest, siteHeaderRequest]);
    }
}