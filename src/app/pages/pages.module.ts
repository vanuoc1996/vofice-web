import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {NgbDropdownModule, NgbModalModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';

import {WidgetModule} from '../shared/widget/widget.module';
import {UIModule} from '../shared/ui/ui.module';

import {PagesRoutingModule} from './pages-routing.module';

import {DashboardsModule} from './dashboards/dashboards.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoaderService} from '../core/services/loader.service';
import {LoaderInterceptorService} from '../core/services/interceptors/loader-interceptor.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelSpeed: 0.3
};

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		NgbDropdownModule,
		NgbModalModule,
		PagesRoutingModule,
		NgApexchartsModule,
		ReactiveFormsModule,
		DashboardsModule,
		HttpClientModule,
		UIModule,
		WidgetModule,
		NgbNavModule,
		NgbTooltipModule,
		PerfectScrollbarModule
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
		},
		LoaderService,
		{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true}
	]
})
export class PagesModule {
}
