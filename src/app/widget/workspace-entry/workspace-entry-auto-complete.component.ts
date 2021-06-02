import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WorkspaceEntryService} from '../../services/impl/workspace-entry.service';
import {WorkspaceAutoCompleteBaseComponent} from './base/workspace-entry-auto-complete.component.base';
import {AUTO_COMPLETE_CONFIG} from './config/auto-complete-config.js';

@Component({
	selector: 'app-workspace-auto-complete',
	templateUrl: './html/workspace-entry-auto-complete.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: WorkspaceAutoCompleteComponent,
			multi: true
		}
	]
})
export class WorkspaceAutoCompleteComponent extends WorkspaceAutoCompleteBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: WorkspaceEntryService) {

			super(AUTO_COMPLETE_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
