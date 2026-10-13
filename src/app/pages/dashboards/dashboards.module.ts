import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Feather Icon
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { CountUpDirective } from 'ngx-countup';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NgbDropdownModule, NgbNavModule, NgbTypeaheadModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';
// Apex Chart Package
import { NgApexchartsModule } from 'ng-apexcharts';
// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Flat Picker
import { FlatpickrDirective } from 'angularx-flatpickr';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


//Module
import { DashboardsRoutingModule } from "./dashboards-routing.module";
import { SharedModule } from '../../shared/shared.module';

// Component
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    CountUpDirective,
    NgbToastModule,
    LeafletModule,
    NgbDropdownModule,
    NgbNavModule,
    SimplebarAngularModule,
    NgApexchartsModule,
    SlickCarouselModule,
    FlatpickrDirective,
    DashboardsRoutingModule,
    SharedModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardsModule { }
