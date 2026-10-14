import { Injectable } from '@angular/core';
import { MessageConstants } from './constants/message.constant';
import { HtmlConstants } from './constants/html.constant';
import { ServiceConstants } from './constants/service.constant';
import { RequestType } from './constants/request.type';
import { RegexPatternConstants } from './constants/regex.pattern.constant';

@Injectable()
export class AppConstants {
    constructor() {
        this.Messages = new MessageConstants();
        this.Html = new HtmlConstants();
        this.Services = new ServiceConstants();
        this.Regex = new RegexPatternConstants();
    }

    public Messages: MessageConstants;
    public Html: HtmlConstants;
    public Services: ServiceConstants;
    public Regex: RegexPatternConstants;

    public PageType: typeof RequestType = RequestType;;

    private static _userId: string;
    public static get UserId(): string {
        return this._userId;
    }
    public static set UserId(value: string) {
        this._userId = value;
    }

    private static _isAdmin: boolean;
    public static get IsAdmin(): boolean {
        return this._isAdmin;
    }
    public static set IsAdmin(value: boolean) {
        this._isAdmin = value;
    }

    private static _authToken: string;
    public static get AuthToken(): string {
        return this._authToken;
    }
    public static set AuthToken(value: string) {
        this._authToken = value;
    }

    public static AccessTokenLocalStorage: string = "accessToken";
    public static AccessTokenServer: string = "X-Auth-Token";
    public static UserLocalStorage: string = "ems-user";
    public static ResourceAccessLocalStorage: string = "resourceAccessRaw";
    public static DefaultContentTypeHeader: string = "application/json; charset=utf-8";
    public static FormDataContentTypeHeader: string = "multipart/form-data";
    public static Accept: string = "application/json";
    public static LoginPageUrl: string = "/login";
    public static RegistrationPageUrl: string = "/new-account";
    public static ErrorInputClass: string = "has-error";
    public static SuccessInputClass: string = "has-success";
    public ServerDateFormat: string = "yyyy/MM/dd hh:mm:ss a";
    public FullDateFormat: string = "dd/MM/yyyy hh:mm:ss a";
    public DateViewFormat: string = "dd/MM/yyyy hh:mm a";
    public DateFormat: string = "dd/MM/yyyy";
    public ServerDateFormatYMD: string = "Y/m/d";
    public ServerTimeFormat: string = "HH:mm:ss a";
    public ServerTimeFormatHM: string = "HH:mm";
    public DateFormatFY: string = "F Y";
    public DateFormatYM: string = "Y-m";
    public DateFormatDMY: string = "d/m/Y";
    public TimeFormatHM: string = "H:i";
    public DefaultStateId: string = "MH";
    public BackDatedReportingDays: number = 3;

    public UserRoleIds: string = "Roles : DisRP,DisEO,BRP";
    public SuperUser: string = "a9a77b00-1db2-45f5-9387-fd3232771608";
    public RequisitionId: string = "a4ab5ef9-59d2-44d4-b51e-9bb6df1381e7";
    public AdvertiseId: string = "b71ba97a-298d-4669-8af0-0eb588ac1991";
    public DefaultImageUrl: string = "/src/assets/images/no-image.png";
    public DefaultImageState: any = JSON.parse('{"detail":{"checked":false,"value":"false"}}');

    public Actions = {
        Add: "add",
        New: "new",
        Save: "save",
        Edit: "edit",
        View: "view",
        Update: "update",
        Delete: "delete",
        Cancel: "cancel",
        Clear: "clear"
    };

    public DocumentType = {
        Employee: "Employees",
        AttendanceLogs: "AttendanceLogs",
        Applicant: "Applicants",
        JobAdvertise: "JobAdvertises"
    };

    ToTitleCase(inputText: string) {
        var i, j, str, lowers, uppers;
        str = inputText.replace(/([^\W_]+[^\s-]*) */g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        // Certain minor words should be left lowercase unless 
        // they are the first or last words in the string
        lowers = ['A', 'An', 'The', 'And', 'But', 'Or', 'For', 'Nor', 'As', 'At',
            'By', 'For', 'From', 'In', 'Into', 'Near', 'Of', 'On', 'Onto', 'To', 'With'];
        for (i = 0, j = lowers.length; i < j; i++)
            str = str.replace(new RegExp('\\s' + lowers[i] + '\\s', 'g'),
                function (txt) {
                    return txt.toLowerCase();
                });

        // Certain words such as initialisms or acronyms should be left uppercase
        uppers = ['Id', 'Tv'];
        for (i = 0, j = uppers.length; i < j; i++)
            str = str.replace(new RegExp('\\b' + uppers[i] + '\\b', 'g'),
                uppers[i].toUpperCase());

        return str;
    }

    public DashboardChart = {
        series: [],
        chart: {
            height: 374,
            type: 'line',
            toolbar: {
                show: false,
            }
        },
        stroke: {
            curve: 'smooth',
            dashArray: [1, 1, 1],
            width: [0, 1, 0],
        },
        fill: {
            opacity: [1, 1, 1]
        },
        markers: {
            size: [0, 2, 0],
            strokeWidth: 2,
            hover: {
                size: 4,
            }
        },
        xaxis: {
            categories: [],
            axisTicks: {
                show: false
            },
            axisBorder: {
                show: false
            }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true,
                }
            },
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
                top: 0,
                right: -2,
                bottom: 15,
                left: 10
            },
        },
        legend: {
            show: true,
            horizontalAlign: 'center',
            offsetX: 0,
            offsetY: -5,
            markers: {
                width: 9,
                height: 9,
                radius: 6,
            },
            itemMargin: {
                horizontal: 10,
                vertical: 0
            },
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                barHeight: '70%'
            }
        },
        colors: ['#979c05ff', '#ea8528', '#56bd53ff'],
        tooltip: {
            shared: true,
            y: [{
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;

                }
            }, {
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;

                }
            }, {
                formatter: function (y: any) {
                    if (typeof y !== "undefined") {
                        return y.toFixed(0);
                    }
                    return y;

                }
            }]
        }
    };
}