import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/auth.service';
import { environment } from '../../../environments/environment';
import { AppConstants } from '../../app.constants';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        // add header with basic auth credentials if user is logged in and request is to the api url        
        const currentUser = this.authenticationService.authUser;
        const isLoggedIn = currentUser && currentUser.AuthTokenWeb;
        const isApiUrl = request.url.startsWith(environment.ApiBaseUrl);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({ headers: request.headers.set('Content-Type', AppConstants.DefaultContentTypeHeader) });
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${currentUser.AuthTokenWeb}`) });
            request = request.clone({ headers: request.headers.set('Accept', AppConstants.Accept) });

            //request = request.clone({ setHeaders: { Authorization: `Bearer ${currentUser.AuthTokenWeb}`, }, });
        }

        // return next.handle(request);
        return next.handle(request)
            .pipe(
                tap((data: any) => {
                    if (data.type == 4) {
                        //console.log(data.status, data.statusText, data.url);
                    }
                }),
                catchError((error: any) => {
                    // if (typeof error == 'string') {
                    //     console.log(`An error occurred: ${error}`);
                    // }
                    // else if (error.error instanceof ErrorEvent) {
                    //     // A client-side or network error occurred. Handle it accordingly.
                    //     console.log(`An error occurred: ${error.error.message}`);
                    // } else {
                    //     // The backend returned an unsuccessful response code.
                    //     // The response body may contain clues as to what went wrong,
                    //     console.log(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
                    // }

                    //this.authenticationService.logout();
                    // return an observable with a user-facing with error message

                    let errorMessage: any = null;
                    if (error == 'Unauthorized') {
                        errorMessage = ' Unauthorized Access, Please contact the administrator.';
                    }
                    else if (error == 'IsLocked') {
                        errorMessage = ' User account is Locked, Please contact the administrator.';
                    }
                    else if (error == 'IsActive') {
                        errorMessage = ' User account is inactive, Please contact the administrator.';
                    }
                    else if (error == 'PasswordExpired') {
                        errorMessage = ' User password has been expired, Please contact the administrator.';
                    }
                    else if (error == 'TokenExpired') {
                        errorMessage = ' User Token has been expired, Please contact the administrator.';
                    }
                    else if (error == 'Bad Request') {
                        errorMessage = ' Invalid submitted form data, Please contact the administrator.';
                    }
                    else {
                        errorMessage = ' ' + error + ', Please try again.';
                    }

                    console.log(errorMessage);
                    return throwError(errorMessage);
                })
            );
    }
}
