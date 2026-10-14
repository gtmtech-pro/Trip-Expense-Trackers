import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Load Icons
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';

import { BaseListComponent } from './base-list/base.list.component';
import { BaseComponent } from './base/base.component';

@NgModule({
    declarations: [

    ],
    imports: [
        CommonModule,
        BaseComponent,
        BaseListComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TripCommonModule {
    constructor() {
    }
}
