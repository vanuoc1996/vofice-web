import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {HobbyTypeService} from '../../services/impl/hobby-type.service';
import {HobbyTypeSelectBaseComponent} from './base/hobby-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-hobby-type-select',
	templateUrl: './html/hobby-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: HobbyTypeSelectComponent,
			multi: true
		}
	]
})
export class HobbyTypeSelectComponent extends HobbyTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: HobbyTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
