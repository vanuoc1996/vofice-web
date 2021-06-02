import {ChangeDetectorRef, OnInit, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomainEntryService} from '../../services/impl/domain-entry.service';
import {DomainEditBaseComponent} from './base/domain-entry-edit.component.base';
import {EDIT_CONFIG} from './config/edit-config.js';

@Component({
	selector: 'app-domain-edit',
	templateUrl: './html/domain-entry-edit.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DomainEditComponent,
			multi: true
		}
	]
})
export class DomainEditComponent extends DomainEditBaseComponent implements OnInit {
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
		modelService: DomainEntryService) {

		super(EDIT_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
