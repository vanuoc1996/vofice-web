import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WorkspaceEntryService} from '../../services/impl/workspace-entry.service';
import {WorkspaceTableBaseComponent} from './base/workspace-entry-table.component.base';
import {TABLE_CONFIG} from './config/table-config.js';

@Component({
	selector: 'app-workspace-table',
	templateUrl: './html/workspace-entry-table.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: WorkspaceTableComponent,
			multi: true
		}
	]
})
export class WorkspaceTableComponent extends WorkspaceTableBaseComponent {
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
		modelService: WorkspaceEntryService) {

		super(
			TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}
}
