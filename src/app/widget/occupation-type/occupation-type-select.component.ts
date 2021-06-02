import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {OccupationTypeService} from '../../services/impl/occupation-type.service';
import {OccupationTypeSelectBaseComponent} from './base/occupation-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-occupation-type-select',
	templateUrl: './html/occupation-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: OccupationTypeSelectComponent,
			multi: true
		}
	]
})
export class OccupationTypeSelectComponent extends OccupationTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: OccupationTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
