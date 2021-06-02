import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {NationalTypeService} from '../../services/impl/national-type.service';
import {NationalTypeSelectBaseComponent} from './base/national-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-national-type-select',
	templateUrl: './html/national-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: NationalTypeSelectComponent,
			multi: true
		}
	]
})
export class NationalTypeSelectComponent extends NationalTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: NationalTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
