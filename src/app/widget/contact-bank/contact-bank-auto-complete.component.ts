import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactBankService} from '../../services/impl/contact-bank.service';
import {ContactBankAutoCompleteBaseComponent} from './base/contact-bank-auto-complete.component.base';
import {AUTO_COMPLETE_CONFIG} from './config/auto-complete-config.js';

@Component({
	selector: 'app-contact-bank-auto-complete',
	templateUrl: './html/contact-bank-auto-complete.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactBankAutoCompleteComponent,
			multi: true
		}
	]
})
export class ContactBankAutoCompleteComponent extends ContactBankAutoCompleteBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactBankService) {

			super(AUTO_COMPLETE_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
