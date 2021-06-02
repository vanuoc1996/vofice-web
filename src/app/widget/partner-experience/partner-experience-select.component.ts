import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PartnerExperienceService} from '../../services/impl/partner-experience.service';
import {PartnerExperienceSelectBaseComponent} from './base/partner-experience-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-partner-experience-select',
	templateUrl: './html/partner-experience-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PartnerExperienceSelectComponent,
			multi: true
		}
	]
})
export class PartnerExperienceSelectComponent extends PartnerExperienceSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PartnerExperienceService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
