import {ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, ControlValueAccessor, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CloudModelService} from '../services/cloud-model-service';
import {ACTION_CMD_ADD, ACTION_CMD_DELETE, ACTION_CMD_EDIT, ACTION_CMD_UPDATE, WidgetEditConfig} from './widget.model';
import {Subscription} from 'rxjs';
import {WidgetBaseComponent} from './widget-base.component';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ServiceContext} from '../models/context';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
	selector: 'app-widget-edit-base',
	template: ``
})
export class WidgetEditComponent extends WidgetBaseComponent implements ControlValueAccessor, OnInit, OnDestroy, Validator {

	constructor(
		public widgetConfig: WidgetEditConfig,
		protected http: HttpClient,
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected cdRef: ChangeDetectorRef,
		protected formBuilder: FormBuilder,
		protected translateService: TranslateService,
		protected dialogService: DialogService,
		protected confirmService: ConfirmationService,
		protected messageService: MessageService,
		protected modelService: CloudModelService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, translateService, confirmService, messageService);

		if (this.autoClose) {
			this.autoClose = JSON.parse(this.autoClose);
		} else {
			this.autoClose = false;
		}

		this.buildEditForm();
	}

	@Input()
	actionCmd: string;
	@Input()
	autoClose;

	primaryId: number;
	partitionKey: Date;
	@Input()
	primaryUUID: string;
	@Input()
	master: any;
	@Input()
	model: any;
	@Output()
	saveEvent = new EventEmitter<any>();
	@Output()
	deleteEvent = new EventEmitter<any>();
	@Output()
	closeEvent = new EventEmitter<any>();

	@Input()
	dataEntries: any;
	@Output()
	dataEntriesChange = new EventEmitter<any>();

	editForm: FormGroup;

	onTouched: () => {};

	ngOnInit() {
		super.ngOnInit();
		this.buildLayout();

		this.actionCmd = this.activatedRoute.snapshot.queryParamMap.get('actionCmd');
		this.primaryUUID = this.activatedRoute.snapshot.queryParamMap.get('primaryUUID');
		this.primaryId = Number.parseFloat(this.activatedRoute.snapshot.queryParamMap.get('primaryId'));

		if (!this.primaryId) {
			this.primaryId = 0;
		}
		if (!this.legend) {
			this.legend = (this.actionCmd === ACTION_CMD_ADD) ? 'ADD' : 'EDIT';
		}

		this.loadModel();
	}

	ngOnDestroy(): void {
	}

	registerOnChange(fn: any): void {
	}

	registerOnTouched(fn: any): void {
	}

	validate(control: AbstractControl): ValidationErrors | null {
		return undefined;
	}

	writeValue(obj: any): void {
	}

	buildLayout(): void {
		this.buildLayoutConfig();
	}

	buildLayoutConfig(): void {
	}

	buildEditForm(): void {
		if (this.editForm === undefined) {
			this.editForm = this.formBuilder.group({});
		}

		if (this.widgetConfig && this.widgetConfig.controls) {
			this.widgetConfig.controls.forEach(item => {
				if (item.datetime) {
					this.editForm.addControl(item.code, new FormControl());
				} else {
					this.editForm.addControl(item.code, new FormControl());
				}
			});
		}
	}

	editModel(event: any): void {
		this.actionCmd = event.actionCmd ? event.actionCmd : ACTION_CMD_ADD;

		if (event.backRoute) {
			this.backRoute = event.backRoute;
		}
		if (this.actionCmd === ACTION_CMD_ADD) {
			this.modelService.create().subscribe(entry => {
				this.model = entry;
				this.primaryId = entry[this.widgetConfig.primaryKeyName];
				this.partitionKey = entry[this.widgetConfig.partitionKeyName];

				if (this.widgetConfig.partitionKeyName) {
					this.partitionKey = entry[this.widgetConfig.partitionKeyName];
				}

				if (event.parent) {
					if (this.widgetConfig.parentKeyName) {
						this.model[this.widgetConfig.parentKeyName] = event.parent[this.widgetConfig.primaryKeyName];
					}
					if (this.widgetConfig.partitionParentKeyName) {
						this.model[this.widgetConfig.partitionParentKeyName] = event.parent[this.widgetConfig.partitionParentKeyName];
					}
					console.log(event, this.model, this.widgetConfig.parentKeyName);
				}
				this.onLoad();
			});
		} else {
			this.primaryId = event.data[this.widgetConfig.primaryKeyName];
			this.partitionKey = event.data[this.widgetConfig.partitionKeyName];

			this.loadModel();
		}
	}

	loadModel(): void {
		if (this.modelService) {
			if (this.actionCmd === ACTION_CMD_ADD) {
				this.modelService.create().subscribe(entry => {
					this.model = entry;

					this.onLoad();
				});
			} else if (this.primaryId !== 0) {
				if (this.widgetConfig.partitionKeyName) {
					this.modelService.getByPartition(this.primaryId, this.partitionKey).pipe().subscribe(entry => {
						this.model = entry;

						this.onLoad();
					});
				} else {
					this.modelService.get(this.primaryId).pipe().subscribe(entry => {
						this.model = entry;

						this.onLoad();
					});
				}
			}
		}
	}

	onLoad(): void {
		if (this.widgetConfig && this.widgetConfig.controls && this.widgetConfig.controls) {
			this.widgetConfig.controls.forEach(entry => {
				const control = this.editForm.get(entry.code);

				if (control) {
					if (entry.datetime) {
						if (this.model[entry.field]) {
							control.setValue(new Date(this.model[entry.field]));
						}
					} else {
						control.setValue(this.model[entry.field]);
					}
				}
			});
		}
	}

	onSubmit(): boolean {
		if (this.widgetConfig && this.widgetConfig.controls) {
			this.widgetConfig.controls.forEach(entry => {
				const control = this.editForm.get(entry.code);

				if (control) {
					this.model[entry.field] = control.value;
				}
			});
		}

		this.bindMasterValue();

		return true;
	}

	bindMasterValue(): void {
	}

	onUpdate(): void {
		this.messageService.clear();

		if (this.editForm.valid && this.onSubmit()) {
			this.confirmService.confirm({
					message: 'are-you-sure-to-update-this-record?',
					header: 'confirmation',
					key: 'update',
					icon: 'pi pi-exclamation-triangle',
					accept: () => {
						if (this.saveEvent.observers.length > 0) {
							this.saveEvent.emit({model: this.model, actionCmd: ACTION_CMD_UPDATE});
						} else {
							this.modelService.save(this.model).subscribe(model => {
								this.showSuccessful('this-record-is-updated');

								if (this.closeEvent.observers.length > 0) {
									this.closeEvent.emit();
								} else if (this.backRoute) {
									this.router.navigateByUrl(this.backRoute).then();
								}
							}, error => {
								this.showError('error', 'error', error.error);
							});
						}
					}
				}
			);
		}
	}

	onDelete(): void {
		this.messageService.clear();

		if (this.editForm.valid && this.onSubmit()) {
			this.confirmService.confirm({
				message: 'are-you-sure-to-delete-this-record?',
				header: 'confirmation',
				key: 'delete',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					if (this.deleteEvent.observers.length > 0) {
						this.deleteEvent.emit({model: this.model, actionCmd: ACTION_CMD_DELETE});
					} else {
						this.modelService.delete(this.model).subscribe(model => {
							this.showSuccessful('this-record-is-deleted');

							if (this.closeEvent.observers.length > 0) {
								this.closeEvent.emit();
							} else if (this.backRoute) {
								this.router.navigateByUrl(this.backRoute).then();
							}
						}, error => {
							this.showError('error', 'error', error.error);
						});
					}
				}
			});
		}
	}

	onCancel(): void {
		if (this.autoClose && (this.closeEvent.observers.length > 0)) {
			this.closeEvent.emit();
		} else if (this.backRoute) {
			this.router.navigateByUrl(this.backRoute).then();
		}
	}

	get enableAdd(): boolean {
		return (this.actionCmd === ACTION_CMD_ADD);
	}

	get enableEdit(): boolean {
		return (this.actionCmd === ACTION_CMD_EDIT);
	}

	get enableDelete(): boolean {
		return (this.actionCmd === ACTION_CMD_EDIT);
	}

	isEditAction(): boolean {
		return (this.actionCmd === ACTION_CMD_EDIT);
	}

}
