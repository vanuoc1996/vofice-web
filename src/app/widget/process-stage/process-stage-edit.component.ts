import {ChangeDetectorRef, OnInit, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessStageService} from '../../services/impl/process-stage.service';
import {ProcessStageEditBaseComponent} from './base/process-stage-edit.component.base';
import {EDIT_CONFIG} from './config/edit-config.js';

@Component({
	selector: 'app-process-stage-edit',
	templateUrl: './html/process-stage-edit.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProcessStageEditComponent,
			multi: true
		}
	]
})
export class ProcessStageEditComponent extends ProcessStageEditBaseComponent implements OnInit {
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
		modelService: ProcessStageService) {

		super(EDIT_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
