import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetTreeConfig} from '../../../core/widget/widget.model';
import {WidgetTreeComponent} from '../../../core/widget/widget-tree.component';
import {PartnerEntryService} from '../../../services/impl/partner-entry.service';

export class PartnerTreeBaseComponent extends WidgetTreeComponent
{
	constructor(
		widgetConfig: WidgetTreeConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		dialogService: DialogService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: PartnerEntryService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}

}
