import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProcessOrderService} from '../../services/impl/process-order.service';
import {ProcessOrderSelectBaseComponent} from './base/process-order-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-process-order-select',
	templateUrl: './html/process-order-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProcessOrderSelectComponent,
			multi: true
		}
	]
})
export class ProcessOrderSelectComponent extends ProcessOrderSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ProcessOrderService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
