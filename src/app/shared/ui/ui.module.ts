import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

import {NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {ClickOutsideModule} from 'ng-click-outside';

import {PagetitleComponent} from './pagetitle/pagetitle.component';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
	declarations: [PagetitleComponent, LoaderComponent],
	imports: [
		CommonModule,
		TranslateModule,
		FormsModule,
		ClickOutsideModule,
		NgbCollapseModule,
		NgbDatepickerModule,
		NgbTimepickerModule,
		NgbDropdownModule
	],
	exports: [PagetitleComponent, LoaderComponent]
})
export class UIModule {
}
