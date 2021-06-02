import {ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetSelectComponent} from './widget-select.component';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CloudModelService} from '../services/cloud-model-service';
import {TranslateService} from '@ngx-translate/core';

// @Component({
// 	selector: 'app-widget-multi-select-base',
// 	template: ``
// })
export class WidgetMultiSelectComponent extends WidgetSelectComponent {

	constructor(
		public widgetConfig: any,
		protected http: HttpClient,
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected cdRef: ChangeDetectorRef,
		protected translateService: TranslateService,
		protected confirmService: ConfirmationService,
		protected messageService: MessageService,
		protected modelService: CloudModelService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}

	writeValue(value: any) {
		if (this.modelService && value) {
			this.modelService.get(value).pipe().subscribe(entry => {
				this.selected = entry;
			});
		} else {
			this.selected = null;
		}
	}

	handleOnChange(event) {
		if (event) {
			this.selected = event.value;
		}

		this.onChange(this.selected[this.widgetConfig.primaryKeyName]);
	}
}
