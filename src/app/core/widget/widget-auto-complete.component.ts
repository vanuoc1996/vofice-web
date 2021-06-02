import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetSelectComponent} from './widget-select.component';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CloudModelService} from '../services/cloud-model-service';
import {finalize} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {WidgetAutoCompleteConfig} from './widget.model';

@Component({
	selector: 'app-widget-auto-complete-base',
	template: ``
})
export class WidgetAutoCompleteComponent extends WidgetSelectComponent implements OnInit, ControlValueAccessor, Validators {

	@Input()
	master: any;

	constructor(
		public widgetConfig: WidgetAutoCompleteConfig,
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

	handleOnChange(event) {
		const selectedIds = this.getSelectedIds();

		this.onChange(selectedIds);
	}

	onSelect(event) {
		this.handleOnChange(event);
	}

	onUnselect(event) {
		this.handleOnChange(event);
	}

	onClear(event) {
		this.handleOnChange(event);
	}

	search(event: any) {
		this.loading = true;

		this.bindSearchContext(event);
		this.modelService.search(this.serviceContext).pipe(finalize(() => {
			this.loading = false;
		})).subscribe(entries => this.options = entries);
	}

	bindSearchContext(event: any): void {
		super.bindSearchContext(event);

		if (event && event.query) {
			this.serviceContext.setSearchBy('textual', event.query + '%');
		}
	}
}
