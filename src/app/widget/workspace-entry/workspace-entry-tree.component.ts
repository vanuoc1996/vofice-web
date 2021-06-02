import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WorkspaceEntryService} from '../../services/impl/workspace-entry.service';
import {WorkspaceTreeBaseComponent} from './base/workspace-entry-tree.component.base';
import {TREE_CONFIG} from './config/tree-config.js';

@Component({
	selector: 'app-workspace-tree',
	templateUrl: './html/workspace-entry-tree.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: WorkspaceTreeComponent,
			multi: true
		}
	]
})
export class WorkspaceTreeComponent extends WorkspaceTreeBaseComponent {
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

		super(TREE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
