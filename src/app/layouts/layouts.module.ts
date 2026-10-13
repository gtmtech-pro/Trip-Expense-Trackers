import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
import { LanguageService } from '../core/services/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Component pages
import { LayoutComponent } from './layout.component';
import { VerticalComponent } from './vertical/vertical.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

// Load Icons
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

@NgModule({
  declarations: [
    LayoutComponent,
    VerticalComponent,
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule {
  constructor() {
    defineElement();
  }
}