import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {EmailTypeService} from '../../services/impl/email-type.service';
import {EmailTypeSelectBaseComponent} from './base/email-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-email-type-select',
	templateUrl: './html/email-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: EmailTypeSelectComponent,
			multi: true
		}
	]
})
export class EmailTypeSelectComponent extends EmailTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: EmailTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
