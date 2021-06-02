import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessActivityService} from '../../services/impl/process-activity.service';
import {ProcessActivitySelectBaseComponent} from './base/process-activity-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-process-activity-select',
	templateUrl: './html/process-activity-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProcessActivitySelectComponent,
			multi: true
		}
	]
})
export class ProcessActivitySelectComponent extends ProcessActivitySelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ProcessActivityService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
