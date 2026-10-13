import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbDropdownModule, NgbAccordionModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';
// Select Droup down
import { NgSelectModule } from '@ng-select/ng-select';
// Flatpicker
import { FlatpickrDirective } from 'angularx-flatpickr';

// Load Icon
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';

// Ng Search 
import { NgPipesModule } from 'ngx-pipes';

// Component pages
import { ExtraPagesRoutingModule } from './extrapages-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from './profile/profile/profile.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { TeamComponent } from './team/team.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionComponent } from './terms-condition/terms-condition.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingsComponent,
    TeamComponent,
    FaqsComponent,
    PrivacyPolicyComponent,
    TermsConditionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbTooltipModule,
    SlickCarouselModule,
    NgSelectModule,
    FlatpickrDirective,
    ExtraPagesRoutingModule,
    SharedModule,
    NgPipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExtraspagesModule {
  constructor() {
    defineElement();
  }
}
