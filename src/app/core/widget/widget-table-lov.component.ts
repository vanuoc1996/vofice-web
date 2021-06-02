import {ChangeDetectorRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CloudTreeModelService} from '../services/cloud-model-service';
import {WidgetTableComponent} from './widget-table.component';
import {WidgetTableConfig} from './widget.model';
import {TranslateService} from '@ngx-translate/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

export class WidgetTableLOVComponent extends WidgetTableComponent {

	constructor(
		widgetConfig: WidgetTableConfig,
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		protected dlgRef: DynamicDialogRef,
		protected dlgConfig: DynamicDialogConfig,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: CloudTreeModelService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, null, confirmService, messageService, modelService);
	}

	onSelectRow(event: any) {
		if (this.dlgRef) {
			this.dlgRef.close(event);
		}
	}

	onSelectBatchRow() {
		if (this.dlgRef) {
			this.dlgRef.close(this.selected);
		}
	}
}
