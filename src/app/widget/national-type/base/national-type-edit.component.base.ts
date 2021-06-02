import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetEditConfig} from '../../../core/widget/widget.model';
import {WidgetEditComponent} from '../../../core/widget/widget-edit.component';
import {NationalTypeService} from '../../../services/impl/national-type.service';
import {NationalType} from '../../../models/national-type.model';

export class NationalTypeEditBaseComponent extends WidgetEditComponent
{
	constructor(
		widgetConfig: WidgetEditConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		dialogService: DialogService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: NationalTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);

		this.model = new NationalType();
	}

}
