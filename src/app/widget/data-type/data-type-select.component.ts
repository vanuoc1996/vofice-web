import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DataTypeService} from '../../services/impl/data-type.service';
import {DataTypeSelectBaseComponent} from './base/data-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-data-type-select',
	templateUrl: './html/data-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DataTypeSelectComponent,
			multi: true
		}
	]
})
export class DataTypeSelectComponent extends DataTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DataTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
