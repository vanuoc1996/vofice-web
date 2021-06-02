import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessEntryService} from '../../services/impl/process-entry.service';
import {ProcessAutoCompleteBaseComponent} from './base/process-entry-auto-complete.component.base';
import {AUTO_COMPLETE_CONFIG} from './config/auto-complete-config.js';

@Component({
	selector: 'app-process-auto-complete',
	templateUrl: './html/process-entry-auto-complete.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProcessAutoCompleteComponent,
			multi: true
		}
	]
})
export class ProcessAutoCompleteComponent extends ProcessAutoCompleteBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ProcessEntryService) {

			super(AUTO_COMPLETE_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
