import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetTableConfig} from '../../../core/widget/widget.model';
import {WidgetTableComponent} from '../../../core/widget/widget-table.component';
import {ContactPhoneService} from '../../../services/impl/contact-phone.service';

export class ContactPhoneTableBaseComponent extends WidgetTableComponent
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
		modelService: ContactPhoneService) {

		super(
			widgetConfig, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}

	bindMasterContext(event: any): void {
		super.bindMasterContext(event);

		if (this.master) {
			this.serviceContext.setSearchBy('resourceName', this.master['resourceName']);
		}
		if (this.master) {
			this.serviceContext.setSearchBy('resourceId', this.master['resourceId']);
		}
	}
}
