import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MeasureEntryService} from '../../services/impl/measure-entry.service';
import {MeasureAutoCompleteBaseComponent} from './base/measure-entry-auto-complete.component.base';
import {AUTO_COMPLETE_CONFIG} from './config/auto-complete-config.js';

@Component({
	selector: 'app-measure-auto-complete',
	templateUrl: './html/measure-entry-auto-complete.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: MeasureAutoCompleteComponent,
			multi: true
		}
	]
})
export class MeasureAutoCompleteComponent extends MeasureAutoCompleteBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: MeasureEntryService) {

			super(AUTO_COMPLETE_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
