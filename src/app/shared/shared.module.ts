import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule, NgbAccordionModule, NgbDropdownModule, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Counter
import { CountUpDirective } from 'ngx-countup';
import { ScrollspyDirective } from './scrollspy.directive';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LandingScrollspyDirective } from './landingscrollspy.directive';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmationDialogBoxComponent } from './confirmation-dialog-box/confirmation-dialog-box.component';
import { ShowDialogComponent } from './show-dialog/show-dialog.component';
import { ShowDialogService } from './show-dialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ConfirmDialogComponent,
    ConfirmationDialogBoxComponent,
    ShowDialogComponent,
    ScrollspyDirective,
    LandingScrollspyDirective
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbDropdownModule,
    SlickCarouselModule,
    CountUpDirective,
    MatDialogModule,
  ],
  exports: [
    BreadcrumbsComponent,
    ConfirmDialogComponent,
    ConfirmationDialogBoxComponent,
    ShowDialogComponent,
    ScrollspyDirective,
    LandingScrollspyDirective,
  ]
})
export class SharedModule { }
