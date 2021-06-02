import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetEditConfig} from '../../../core/widget/widget.model';
import {WidgetEditComponent} from '../../../core/widget/widget-edit.component';
import {PositionTypeService} from '../../../services/impl/position-type.service';
import {PositionType} from '../../../models/position-type.model';

export class PositionTypeEditBaseComponent extends WidgetEditComponent
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
		modelService: PositionTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);

		this.model = new PositionType();
	}

}
