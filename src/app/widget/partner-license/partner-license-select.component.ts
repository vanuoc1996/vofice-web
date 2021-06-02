import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PartnerLicenseService} from '../../services/impl/partner-license.service';
import {PartnerLicenseSelectBaseComponent} from './base/partner-license-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-partner-license-select',
	templateUrl: './html/partner-license-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PartnerLicenseSelectComponent,
			multi: true
		}
	]
})
export class PartnerLicenseSelectComponent extends PartnerLicenseSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PartnerLicenseService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
