import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

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
