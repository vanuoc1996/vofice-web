import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetBaseComponent} from './widget-base.component';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {CloudModelService} from '../services/cloud-model-service';
import {WidgetSelectConfig} from './widget.model';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-widget-select-base',
	template: ``
})
export class WidgetSelectComponent extends WidgetBaseComponent implements OnInit, ControlValueAccessor, Validators {
	@Input()
	master: any;
	@Input()
	options: any;

	statementId = 'textual';
	defaultLabel = 'N/A';
	selected: any;

	onTouched: (event: any) => void;
	onChange: (event: any) => void;

	constructor(
		public widgetConfig: WidgetSelectConfig,
		protected http: HttpClient,
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected cdRef: ChangeDetectorRef,
		protected translateService: TranslateService,
		protected confirmService: ConfirmationService,
		protected messageService: MessageService,
		protected modelService: CloudModelService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService);
	}

	ngOnInit(): void {
		super.ngOnInit();

		if (!this.options) {
			this.buildOptions();
		}
	}

	protected buildOptions(): void {
		if (this.modelService) {
			this.bindSearchContext(null);

			this.modelService.search(this.serviceContext).subscribe(entries => {
				this.options = entries;

				if (this.widgetConfig.enableNull) {
					this.modelService.create().subscribe(entry => {
						if (this.widgetConfig.labelName && this.defaultLabel) {
							entry[this.widgetConfig.labelName] = this.defaultLabel;
						}
						this.options.splice(0, 0, entry);
					});
				}
			});
		}
	}

	registerOnChange(onChange: any) {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	setDisabledState(disable: boolean) {
		this.disable = disable;
	}

	writeValue(value: any) {
		if (this.modelService && value) {
			if (this.widgetConfig.multiple) {
				value.forEach(item => {
					this.modelService.get(item).pipe().subscribe(entry => {
						this.selected.push(entry);
					});
				});
			} else {
				this.modelService.get(value).pipe().subscribe(entry => {
					this.selected = entry;
				});
			}
		} else if (this.widgetConfig.multiple) {
			this.selected = [];
		} else {
			this.selected = null;
		}
	}

	handleOnChange(event) {
		const selectedIds = this.getSelectedIds();
		console.log(selectedIds);
		this.onChange(selectedIds);
	}

	search(event: any) {
		this.bindSearchContext(event);

		if (this.modelService) {
			this.modelService.search(this.serviceContext).pipe().subscribe(entries => {
				this.options = entries;
			});
		}
	}

	bindSearchContext(event: any): void {
		this.bindMasterContext(event);
	}

	bindMasterContext(event: any): void {
	}

	getSelectedIds(): any {
		let selectedIds;
		if (this.selected) {
			if (this.widgetConfig.multiple) {
				selectedIds = [];

				this.selected.forEach(entry => {
					selectedIds.push(entry[this.widgetConfig.primaryKeyName]);
				});
			} else {
				console.log(this.widgetConfig.primaryKeyName);
				console.log(this.selected);
				selectedIds = this.selected[this.widgetConfig.primaryKeyName];
			}
		}

		return selectedIds;
	}
}
