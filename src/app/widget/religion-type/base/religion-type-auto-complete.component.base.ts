import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ReligionTypeService} from '../../../services/impl/religion-type.service';
import {WidgetAutoCompleteConfig} from '../../../core/widget/widget.model';
import {WidgetAutoCompleteComponent} from '../../../core/widget/widget-auto-complete.component';

export class ReligionTypeAutoCompleteBaseComponent extends WidgetAutoCompleteComponent
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
		modelService: ReligionTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
