import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactPhoneService} from '../../services/impl/contact-phone.service';
import {ContactPhoneSelectBaseComponent} from './base/contact-phone-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-contact-phone-select',
	templateUrl: './html/contact-phone-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactPhoneSelectComponent,
			multi: true
		}
	]
})
export class ContactPhoneSelectComponent extends ContactPhoneSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactPhoneService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
