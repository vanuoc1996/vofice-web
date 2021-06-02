import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactBankService} from '../../services/impl/contact-bank.service';
import {ContactBankTableBaseComponent} from './base/contact-bank-table.component.base';
import {TABLE_CONFIG} from './config/table-config.js';

@Component({
	selector: 'app-contact-bank-table',
	templateUrl: './html/contact-bank-table.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactBankTableComponent,
			multi: true
		}
	]
})
export class ContactBankTableComponent extends ContactBankTableBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		dialogService: DialogService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactBankService) {

		super(
			TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}
}
