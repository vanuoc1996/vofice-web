import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactBankService} from '../../services/impl/contact-bank.service';
import {ContactBankSelectBaseComponent} from './base/contact-bank-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-contact-bank-select',
	templateUrl: './html/contact-bank-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactBankSelectComponent,
			multi: true
		}
	]
})
export class ContactBankSelectComponent extends ContactBankSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactBankService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
