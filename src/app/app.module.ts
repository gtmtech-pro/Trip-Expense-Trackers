import { importProvidersFrom, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LayoutsModule } from "./layouts/layouts.module";
import { PagesModule } from "./pages/pages.module";

// Auth
import {
  HttpClient,
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { environment } from "../environments/environment";
import { initFirebaseBackend } from "./authUtils";
import { FakeBackendInterceptor } from "./core/helpers/fake-backend";
import { ErrorInterceptor } from "./core/helpers/error.interceptor";
import { JwtInterceptor } from "./core/helpers/jwt.interceptor";

// Language
import {
  TRANSLATE_HTTP_LOADER_CONFIG,
  TranslateHttpLoader,
} from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
// Store
import { rootReducer } from "./store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { EcommerceEffects } from "./store/Ecommerce/ecommerce_effect";
import { CRMEffects } from "./store/CRM/crm_effect";
import { TicketEffects } from "./store/Ticket/ticket_effect";
import { ApikeyEffects } from "./store/APIKey/apikey_effect";
import { AuthenticationEffects } from "./store/Authentication/authentication.effects";
import { provideFlatpickrDefaults } from "angularx-flatpickr";
export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader();
}

if (environment.defaultauth === "firebase") {
  initFirebaseBackend(environment.firebaseConfig);
} else {
  FakeBackendInterceptor;
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([
      AuthenticationEffects,
      EcommerceEffects,
      CRMEffects,
      TicketEffects,
      ApikeyEffects,
    ]),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    PagesModule,
  ],
  providers: [
    provideFlatpickrDefaults(),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
        defaultLanguage: "en", // Set your default language
      }),
    ),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: "assets/i18n/",
        suffix: ".json",
      },
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
