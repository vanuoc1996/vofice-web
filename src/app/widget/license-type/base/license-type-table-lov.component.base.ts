import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {WidgetTableLOVConfig} from '../../../core/widget/widget.model';
import {WidgetTableLOVComponent} from '../../../core/widget/widget-table-lov.component';
import {LicenseTypeService} from '../../../services/impl/license-type.service';

export class LicenseTypeTableLOVBaseComponent extends WidgetTableLOVComponent
{
	constructor(
		widgetConfig: WidgetTableLOVConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		dlgRef: DynamicDialogRef,
		dlgConfig: DynamicDialogConfig,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: LicenseTypeService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, dlgRef, dlgConfig, formBuilder, translateService, confirmService, messageService, modelService);
	}
}
