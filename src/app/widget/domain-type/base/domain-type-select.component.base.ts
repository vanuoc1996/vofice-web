import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomainTypeService} from '../../../services/impl/domain-type.service';
import {WidgetSelectConfig} from '../../../core/widget/widget.model';
import {WidgetSelectComponent} from '../../../core/widget/widget-select.component';

export class DomainTypeSelectBaseComponent extends WidgetSelectComponent
{
	constructor(
		widgetConfig: WidgetSelectConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DomainTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
