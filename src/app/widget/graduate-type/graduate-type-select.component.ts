import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {GraduateTypeService} from '../../services/impl/graduate-type.service';
import {GraduateTypeSelectBaseComponent} from './base/graduate-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-graduate-type-select',
	templateUrl: './html/graduate-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: GraduateTypeSelectComponent,
			multi: true
		}
	]
})
export class GraduateTypeSelectComponent extends GraduateTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: GraduateTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
