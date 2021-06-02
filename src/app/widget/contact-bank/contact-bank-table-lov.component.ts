import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ContactBankService} from '../../services/impl/contact-bank.service';
import {ContactBankTableLOVBaseComponent} from './base/contact-bank-table-lov.component.base';
import {TABLE_LOV_CONFIG} from './config/table-lov-config.js';

@Component({
	selector: 'app-contact-bank-table-lov',
	templateUrl: './html/contact-bank-table-lov.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactBankTableLOVComponent,
			multi: true
		}
	]
})
export class ContactBankTableLOVComponent extends ContactBankTableLOVBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		dlgRef: DynamicDialogRef,
		dlgConfig: DynamicDialogConfig,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactBankService) {

		super(TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, dlgRef, dlgConfig, formBuilder, translateService, confirmService, messageService, modelService);
	}
}
