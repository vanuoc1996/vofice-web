import {ChangeDetectorRef, OnInit, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WorkspaceCommentService} from '../../services/impl/workspace-comment.service';
import {WorkspaceCommentEditBaseComponent} from './base/workspace-comment-edit.component.base';
import {EDIT_CONFIG} from './config/edit-config.js';

@Component({
	selector: 'app-workspace-comment-edit',
	templateUrl: './html/workspace-comment-edit.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: WorkspaceCommentEditComponent,
			multi: true
		}
	]
})
export class WorkspaceCommentEditComponent extends WorkspaceCommentEditBaseComponent implements OnInit {
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
		modelService: WorkspaceCommentService) {

		super(EDIT_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
