import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessChecklistService} from '../../services/impl/process-checklist.service';
import {ProcessChecklistSelectBaseComponent} from './base/process-checklist-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-process-checklist-select',
	templateUrl: './html/process-checklist-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProcessChecklistSelectComponent,
			multi: true
		}
	]
})
export class ProcessChecklistSelectComponent extends ProcessChecklistSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ProcessChecklistService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
