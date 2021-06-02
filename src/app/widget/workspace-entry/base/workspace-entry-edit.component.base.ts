import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetEditConfig} from '../../../core/widget/widget.model';
import {WidgetEditComponent} from '../../../core/widget/widget-edit.component';
import {WorkspaceEntryService} from '../../../services/impl/workspace-entry.service';
import {WorkspaceEntry} from '../../../models/workspace-entry.model';

export class WorkspaceEditBaseComponent extends WidgetEditComponent
{
	constructor(
		widgetConfig: WidgetEditConfig,
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

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);

		this.model = new WorkspaceEntry();
	}

	bindMasterValue(): void {
		this.model['resourceName'] = this.master;
		this.model['resourceId'] = this.master;
	}
}
