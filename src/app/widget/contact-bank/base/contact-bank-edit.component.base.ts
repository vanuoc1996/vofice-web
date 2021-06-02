import {ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {WidgetEditConfig} from '../../../core/widget/widget.model';
import {WidgetEditComponent} from '../../../core/widget/widget-edit.component';
import {ContactBankService} from '../../../services/impl/contact-bank.service';
import {ContactBank} from '../../../models/contact-bank.model';

export class ContactBankEditBaseComponent extends WidgetEditComponent
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
		modelService: ContactBankService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);

		this.model = new ContactBank();
	}

	bindMasterValue(): void {
		this.model['resourceName'] = this.master;
		this.model['resourceId'] = this.master;
	}
}
