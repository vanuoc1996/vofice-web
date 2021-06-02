import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DepartmentTypeService} from '../../services/impl/department-type.service';
import {DepartmentTypeSelectBaseComponent} from './base/department-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-department-type-select',
	templateUrl: './html/department-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DepartmentTypeSelectComponent,
			multi: true
		}
	]
})
export class DepartmentTypeSelectComponent extends DepartmentTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DepartmentTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
