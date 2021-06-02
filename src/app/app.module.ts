import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';

import {environment} from '../environments/environment';

import {NgbAccordionModule, NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';

import {LayoutsModule} from './layouts/layouts.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initFirebaseBackend} from './authUtils';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ErrorInterceptor} from './core/helpers/error.interceptor';
import {JwtInterceptor} from './core/helpers/jwt.interceptor';
import {FakeBackendInterceptor} from './core/helpers/fake-backend';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {DialogService} from 'primeng/dynamicdialog';

if (environment.defaultauth === 'firebase') {
	initFirebaseBackend(environment.firebaseConfig);
} else {
	// tslint:disable-next-line: no-unused-expression
	FakeBackendInterceptor;
}

export function createTranslateLoader(http: HttpClient): any {
	return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function getURL(router: Router): string {
	const urlTree = router.parseUrl(router.url);
	urlTree.queryParams = {};

	return urlTree.toString();
}

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		}),
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		RouterModule,
		LayoutsModule,
		AppRoutingModule,
		CarouselModule,
		NgbAccordionModule,
		NgbNavModule,
		NgbTooltipModule,
		ScrollToModule.forRoot()
	],
	bootstrap: [AppComponent],
	providers: [
		{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
		{provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true},
		MessageService, ConfirmationService, DialogService
	]
})
export class AppModule {
}
