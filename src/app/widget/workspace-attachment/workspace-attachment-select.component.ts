import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WorkspaceAttachmentService} from '../../services/impl/workspace-attachment.service';
import {WorkspaceAttachmentSelectBaseComponent} from './base/workspace-attachment-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-workspace-attachment-select',
	templateUrl: './html/workspace-attachment-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: WorkspaceAttachmentSelectComponent,
			multi: true
		}
	]
})
export class WorkspaceAttachmentSelectComponent extends WorkspaceAttachmentSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: WorkspaceAttachmentService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
