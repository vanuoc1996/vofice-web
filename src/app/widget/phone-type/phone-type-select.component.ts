import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PhoneTypeService} from '../../services/impl/phone-type.service';
import {PhoneTypeSelectBaseComponent} from './base/phone-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-phone-type-select',
	templateUrl: './html/phone-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PhoneTypeSelectComponent,
			multi: true
		}
	]
})
export class PhoneTypeSelectComponent extends PhoneTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PhoneTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
