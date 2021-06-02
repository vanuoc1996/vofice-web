import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';

import {StatComponent} from './stat/stat.component';
import {TransactionComponent} from './transaction/transaction.component';
import {WidgetBaseComponent} from '../../core/widget/widget-base.component';
import {WidgetEditComponent} from '../../core/widget/widget-edit.component';
import {WidgetTableComponent} from '../../core/widget/widget-table.component';

@NgModule({
	declarations: [
		StatComponent,
		TransactionComponent
	],
	imports: [
		CommonModule,
		TranslateModule,
		NgbModalModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
	],
	exports: [
		StatComponent,
		TransactionComponent,
	]
})
export class WidgetModule {
}
