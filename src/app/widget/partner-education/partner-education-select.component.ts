import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PartnerEducationService} from '../../services/impl/partner-education.service';
import {PartnerEducationSelectBaseComponent} from './base/partner-education-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-partner-education-select',
	templateUrl: './html/partner-education-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PartnerEducationSelectComponent,
			multi: true
		}
	]
})
export class PartnerEducationSelectComponent extends PartnerEducationSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PartnerEducationService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
