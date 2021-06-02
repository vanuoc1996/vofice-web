import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {OrderTypeService} from '../../../services/impl/order-type.service';
import {WidgetAutoCompleteConfig} from '../../../core/widget/widget.model';
import {WidgetAutoCompleteComponent} from '../../../core/widget/widget-auto-complete.component';

export class OrderTypeAutoCompleteBaseComponent extends WidgetAutoCompleteComponent
{
	constructor(
		widgetConfig: WidgetAutoCompleteConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: OrderTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
