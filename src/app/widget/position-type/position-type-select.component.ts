import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PositionTypeService} from '../../services/impl/position-type.service';
import {PositionTypeSelectBaseComponent} from './base/position-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-position-type-select',
	templateUrl: './html/position-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: PositionTypeSelectComponent,
			multi: true
		}
	]
})
export class PositionTypeSelectComponent extends PositionTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PositionTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
