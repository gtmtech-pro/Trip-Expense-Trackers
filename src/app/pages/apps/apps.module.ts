import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbTooltipModule, NgbDropdownModule, NgbAccordionModule, NgbProgressbarModule, NgbNavModule, NgbPaginationModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

// Emoji Picker
import { PickerModule } from '@ctrl/ngx-emoji-mart';

// Load Icon
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

// Calendar package
import { FullCalendarModule } from '@fullcalendar/angular';

// Flat Picker
import { FlatpickrDirective } from 'angularx-flatpickr';
// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';
// Ck Editer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
// Counter
import { CountUpDirective } from 'ngx-countup';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

//  Drag and drop
import { DndModule } from 'ngx-drag-drop';

// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';

// NG2 Search Filter
import { NgPipesModule } from 'ngx-pipes';

// drag and droup row table
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';

// Component Pages
import { AppsRoutingModule } from "./apps-routing.module";
import { SharedModule } from '../../shared/shared.module';

import { DatePipe } from '@angular/common';

import { SortByPipe } from '../apps/sort-by.pipe';
import { ApikeyComponent } from './apikey/apikey.component';


// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    SortByPipe,
    ApikeyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbCollapseModule,
    FeatherModule.pick(allIcons),
    FullCalendarModule,
    FlatpickrDirective,
    SimplebarAngularModule,
    CKEditorModule,
    CountUpDirective,
    NgApexchartsModule,
    LeafletModule,
    AppsRoutingModule,
    SharedModule,
    PickerModule,
    DndModule,
    NgSelectModule,
    DragDropModule,
    MatTableModule,
    NgPipesModule,
    NgxMaskDirective,
    NgxMaskPipe,
    SlickCarouselModule
  ],
  providers: [
    provideNgxMask(),
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppsModule {
  constructor() {
    defineElement();
  }
}
