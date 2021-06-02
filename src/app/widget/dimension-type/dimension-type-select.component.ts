import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DimensionTypeService} from '../../services/impl/dimension-type.service';
import {DimensionTypeSelectBaseComponent} from './base/dimension-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-dimension-type-select',
	templateUrl: './html/dimension-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DimensionTypeSelectComponent,
			multi: true
		}
	]
})
export class DimensionTypeSelectComponent extends DimensionTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DimensionTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
