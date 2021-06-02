import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactSocialService} from '../../services/impl/contact-social.service';
import {ContactSocialTableBaseComponent} from './base/contact-social-table.component.base';
import {TABLE_CONFIG} from './config/table-config.js';

@Component({
	selector: 'app-contact-social-table',
	templateUrl: './html/contact-social-table.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactSocialTableComponent,
			multi: true
		}
	]
})
export class ContactSocialTableComponent extends ContactSocialTableBaseComponent {
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
		modelService: ContactSocialService) {

		super(
			TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}
}
