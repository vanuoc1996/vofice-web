import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetTableConfig} from '../../../core/widget/widget.model';
import {WidgetTableComponent} from '../../../core/widget/widget-table.component';
import {RelationTypeService} from '../../../services/impl/relation-type.service';

export class RelationTypeTableBaseComponent extends WidgetTableComponent
{
	constructor(
		widgetConfig: WidgetTableConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		dialogService: DialogService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: RelationTypeService) {

		super(
			widgetConfig, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}

}
