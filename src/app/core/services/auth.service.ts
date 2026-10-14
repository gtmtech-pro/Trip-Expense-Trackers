import { Injectable } from '@angular/core';
import { getFirebaseBackend } from '../../authUtils';
import { User } from '../../store/Authentication/auth.models';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, of, throwError } from 'rxjs';
import { GlobalComponent } from "../../global-component";
import { Store } from '@ngrx/store';
import { RegisterSuccess, loginFailure, loginSuccess, logout, logoutSuccess } from '../../store/Authentication/authentication.actions';
import { BaseService } from '../../services/base.service';
import { UserModel } from '../../models/user.model';

const AUTH_API = GlobalComponent.AUTH_API;

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
    user!: User;
    currentUserValue: any;

    private currentUserSubject: BehaviorSubject<User>;
    // public currentUser: Observable<User>;

    public get authUser(): UserModel {
        return this.userSubject.value;
    }

    constructor(private http: BaseService, private store: Store) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(window.sessionStorage.getItem('currentUser')!));
        // this.currentUser = this.currentUserSubject.asObservable();

        var currentUserJson = window.sessionStorage.getItem('currentUser')!;
        this.userSubject = new BehaviorSubject<UserModel>(JSON.parse(currentUserJson));
        this.currentUserModel = this.userSubject.asObservable();
    }

    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email: string, first_name: string, password: string) {
        // return getFirebaseBackend()!.registerUser(email, password).then((response: any) => {
        //     const user = response;
        //     return user;
        // });

        // Register Api
        return this.http.post(AUTH_API + 'signup', {
            email,
            first_name,
            password,
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;
                return user;
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                this.store.dispatch(loginFailure({ error: errorMessage }));
                return throwError(errorMessage);
            })
        );
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        // return getFirebaseBackend()!.loginUser(email, password).then((response: any) => {
        //     const user = response;
        //     return user;
        // });

        return this.http.post(AUTH_API + 'signin', {
            email,
            password
        }, httpOptions).pipe(
            map((response: any) => {
                const user = response;
                return user;
            }),
            catchError((error: any) => {
                const errorMessage = 'Login failed'; // Customize the error message as needed
                return throwError(errorMessage);
            })
        );
    }

    /**
     * Returns the current user
     */
    public currentUser(): any {
        return getFirebaseBackend()!.getAuthenticatedUser();
    }

    /**
     * Logout the user
     */
    logout() {
        this.resetLogin();
        this.store.dispatch(logout());
        window.sessionStorage.removeItem('currentUser');
        window.sessionStorage.removeItem('token');
        this.currentUserSubject.next(null!);

        return of(undefined).pipe();
    }

    /**
     * Reset password
     * @param email email
     */
    resetPassword(email: string) {
        return getFirebaseBackend()!.forgetPassword(email).then((response: any) => {
            const message = response.data;
            return message;
        });
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