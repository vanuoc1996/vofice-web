import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CompanyTypeService} from '../../services/impl/company-type.service';
import {CompanyTypeSelectBaseComponent} from './base/company-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-company-type-select',
	templateUrl: './html/company-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: CompanyTypeSelectComponent,
			multi: true
		}
	]
})
export class CompanyTypeSelectComponent extends CompanyTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: CompanyTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
