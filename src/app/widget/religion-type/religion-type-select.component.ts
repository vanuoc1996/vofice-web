import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ReligionTypeService} from '../../services/impl/religion-type.service';
import {ReligionTypeSelectBaseComponent} from './base/religion-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-religion-type-select',
	templateUrl: './html/religion-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ReligionTypeSelectComponent,
			multi: true
		}
	]
})
export class ReligionTypeSelectComponent extends ReligionTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ReligionTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
