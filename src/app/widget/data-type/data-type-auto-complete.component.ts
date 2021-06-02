import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DataTypeService} from '../../services/impl/data-type.service';
import {DataTypeAutoCompleteBaseComponent} from './base/data-type-auto-complete.component.base';
import {AUTO_COMPLETE_CONFIG} from './config/auto-complete-config.js';

@Component({
	selector: 'app-data-type-auto-complete',
	templateUrl: './html/data-type-auto-complete.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DataTypeAutoCompleteComponent,
			multi: true
		}
	]
})
export class DataTypeAutoCompleteComponent extends DataTypeAutoCompleteBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DataTypeService) {

			super(AUTO_COMPLETE_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
