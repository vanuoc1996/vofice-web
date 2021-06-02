import {ChangeDetectorRef, OnInit, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactEmailService} from '../../services/impl/contact-email.service';
import {ContactEmailEditBaseComponent} from './base/contact-email-edit.component.base';
import {EDIT_CONFIG} from './config/edit-config.js';

@Component({
	selector: 'app-contact-email-edit',
	templateUrl: './html/contact-email-edit.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactEmailEditComponent,
			multi: true
		}
	]
})
export class ContactEmailEditComponent extends ContactEmailEditBaseComponent implements OnInit {
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
		modelService: ContactEmailService) {

		super(EDIT_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
