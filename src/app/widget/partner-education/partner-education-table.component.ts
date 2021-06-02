import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PartnerEducationService} from '../../services/impl/partner-education.service';
import {PartnerEducationTableBaseComponent} from './base/partner-education-table.component.base';
import {TABLE_CONFIG} from './config/table-config.js';

@Component({
	selector: 'app-partner-education-table',
	templateUrl: './html/partner-education-table.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PartnerEducationTableComponent,
			multi: true
		}
	]
})
export class PartnerEducationTableComponent extends PartnerEducationTableBaseComponent {
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
		modelService: PartnerEducationService) {

		super(
			TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}
}
