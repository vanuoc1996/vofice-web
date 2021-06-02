import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, LazyLoadEvent, MenuItem, MessageService, SortEvent} from 'primeng/api';
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CloudModelService} from '../services/cloud-model-service';
import {zip} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {WidgetBaseComponent} from './widget-base.component';
import {ACTION_CMD_ADD, ACTION_CMD_EDIT, WidgetTableConfig} from './widget.model';
import {WidgetEditComponent} from './widget-edit.component';
import {HttpClient} from '@angular/common/http';
import {ServiceContext} from '../models/context';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';

@Component({
	selector: 'app-widget-table-base',
	template: ``
})
export class WidgetTableComponent extends WidgetBaseComponent implements OnInit, ControlValueAccessor, Validators {
	@Input()
	addPage: string;
	@Input()
	editPage: string;
	@Input()
	lazy = true;
	@Input()
	lazyLoadOnInit = true;
	@Input()
	master: any;
	@Input()
	data: any;
	@Input()
	selected: any;

	editModel: any;
	editDisplay: boolean;
	showCustomSearch = false;

	@ViewChild('widgetEdit')
	editComponent: WidgetEditComponent;

	onTouched: () => {};
	onChange: () => {};

	searchForm: FormGroup;
	totalRecords = 0;

	searchMenuItems: MenuItem[] = [];
	actionMenuItems: MenuItem[] = [];
	settingMenuItems: MenuItem[] = [];
	rowMenuItems: MenuItem[] = [];

	constructor(
		public widgetConfig: WidgetTableConfig,
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

		this.buildSearchForm();
	}


	ngOnInit(): void {
		super.ngOnInit();

		if (!this.data) {
			this.data = [];
		}
	}

	registerOnChange(onChange: any) {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: any) {
		this.onTouched = onTouched;
	}

	writeValue(value: any) {
		this.selected = value;
	}

	buildLayout(): void {
		this.buildLayoutConfig();
		this.buildSearchMenu();
		this.buildActionMenu();
		this.buildToolsMenu();
	}

	buildLayoutConfig(): void {
	}

	buildSearchForm(): void {
		if (!this.searchForm) {
			this.searchForm = this.formBuilder.group({});
			this.searchForm.addControl('textual', new FormControl('', Validators.nullValidator));
		}

		if (this.widgetConfig && this.widgetConfig.searchControls) {
			this.widgetConfig.searchControls.forEach(column => {
				if (column.initialise) {
					if (column.datetime) {
						this.searchForm.addControl(column.field, new FormControl(new Date()));
					} else {
						this.searchForm.addControl(column.field, new FormControl('', Validators.nullValidator));
					}
				}
			});
		}
	}

	buildSearchMenu(): void {
		if (this.widgetConfig && this.widgetConfig.finders) {
			this.widgetConfig.finders.forEach(
				(item) => {
					let menuItem: MenuItem;

					menuItem = {
						id: 'filter-menu-item-' + item.code,
						label: item.label,
						icon: item.icon,
						command: (event) => {
							this.changeFinder(event);
						}
					};

					this.searchMenuItems.push(menuItem);
				}
			);
		}
	}

	buildActionMenu(): void {
		if (this.widgetConfig.enableAdd) {
			const menuItem: MenuItem = {
				label: 'add',
				icon: 'pi pi-plus',
				command: ({event}) => {
					this.doCreate(event);
				}
			};

			this.actionMenuItems.push(menuItem);
		}
		if (this.widgetConfig.enableDelete) {
			const menuItem: MenuItem = {
				label: 'delete',
				icon: 'pi pi-plus',
				command: ({event}) => {
					this.onDelete(event);
				}
			};

			this.actionMenuItems.push(menuItem);
		}
	}

	buildToolsMenu(): void {
		if (this.widgetConfig && this.widgetConfig.orders) {
			const orderMenuItem: MenuItem = {
				id: 'setting-menu-order',
				label: 'order-by',
				icon: 'pi pi-sort',
				items: []
			};

			this.widgetConfig.orders.forEach(
				(item) => {
					let menuItem: MenuItem;

					menuItem = {
						label: item.label,
						icon: item.icon,
						command: (event) => {
							this.doSort(event);
						}
					};

					orderMenuItem.items.push(menuItem);
				}
			);

			this.settingMenuItems.push(orderMenuItem);
		}
		if (this.widgetConfig && this.widgetConfig.toggleControls) {
			const rootMenuItem: MenuItem = {
				id: 'setting-menu-toggle',
				label: 'column-toggle',
				icon: 'pi pi-sort',
				items: []
			};

			this.widgetConfig.toggleControls.forEach(
				(item) => {
					let menuItem: MenuItem;

					menuItem = {
						id: 'toggle-menu-item-' + item.code,
						label: item.label,
						icon: item.visible ? 'pi pi-check' : '',
						command: (event) => {
							this.doToggleColumn(event);
						}
					};

					rootMenuItem.items.push(menuItem);
				}
			);

			this.settingMenuItems.push(rootMenuItem);
		}
		if (this.widgetConfig.enableExport) {
			const exportMenuItem: MenuItem = {
				label: 'export',
				icon: 'pi pi-plus',
				items: [
					{label: 'csv'},
					{label: 'excel'},
					{label: 'pdf'}
				]
			};


			this.settingMenuItems.push(exportMenuItem);
		}
	}

	doCreate(event: any): void {
		if (!event) {
			event = {};
		}
		event.actionCmd = ACTION_CMD_ADD;
		event.master = this.master;

		if (this.editComponent) {
			this.editComponent.editModel(event);
			this.editDisplay = true;
		}
	}

	doSort(event: any): void {
	}

	doToggleColumn(event: any): void {
		let code = '';
		let menuItem: MenuItem;

		if (event && event.item) {
			menuItem = event.item;
			code = menuItem.id;

			if (code) {
				code = code.substr('toggle-menu-item-'.length);
			}
		}

		if (code && this.widgetConfig && this.widgetConfig.toggleControls) {
			this.widgetConfig.toggleControls.forEach(column => {
				if (column.code === code) {
					column.visible = !column.visible;

					if (menuItem) {
						menuItem.icon = column.visible ? 'pi pi-check' : 'pi pi-ban';
					}
				}
			});
		}
	}

	isToggleOn(code: string): boolean {
		let found = false;
		let visible = true;

		if (this.widgetConfig && this.widgetConfig.toggleControls) {
			this.widgetConfig.toggleControls.forEach(column => {
				if (column.code === code) {
					visible = column.visible;
					found = true;

					return;
				}
			});
		}

		return found ? visible : true;
	}

	changeFinder(event: any): void {
		let code = '';
		let menuItem: MenuItem;

		if (event && event.item) {
			menuItem = event.item;
			code = menuItem.id;

			if (code) {
				code = code.substr('filter-menu-item-'.length);
			}
		}

		if (menuItem) {
			this.searchMenuItems.forEach(entry => {
				if (entry.id === menuItem.id) {
					menuItem.icon = 'pi pi-check';
				} else {
					entry.icon = 'pi pi-apple';
				}
			});
		}
		if (code && this.widgetConfig && this.widgetConfig.finders) {
			this.widgetConfig.finders.forEach(entry => {
				if (entry.code === code) {
					entry.columns.forEach((column) => {
						const control = this.searchForm.get(column.code);

						if (control != null) {
							if (column.disabled) {
								control.disable();
							} else {
								control.enable();
							}
							if (column.initValue != null) {
								control.setValue(column.initValue);
							} else {
								control.setValue(null);
							}
						}
					});

					this.showCustomSearch = entry.custom;
				}
			});
		}

		if (!this.showCustomSearch) {
			this.search();
		}
	}

	customSort(event: SortEvent): void {
		this.search();
	}

	search(): void {
		this.bindSearchContext(null);

		this.loading = true;
		this.showCustomSearch = false;
		this.onSearch();
	}

	bindSearchContext(event: any): void {
		this.serviceContext = new ServiceContext();
		this.serviceContext.statementId = this.widgetConfig.statementId;

		if (event) {
			this.serviceContext.start = event['first'];
			this.serviceContext.limit = event['rows'];
		}

		this.bindSearchForm(event);
		this.bindMasterContext(event);
	}

	bindSearchForm(event: any): void {
		let control = this.searchForm.get('textual');

		if (control) {
			this.serviceContext.setSearchBy('textual', control.value);
		}
		if (this.widgetConfig && this.widgetConfig.searchControls) {
			this.widgetConfig.searchControls.forEach(entry => {
				control = this.searchForm.get(entry.code);

				if (control) {
					this.serviceContext.setSearchBy(entry.code, control.value);
				}
			});
		}
	}

	bindMasterContext(event: any): void {
	}

	onSearch(): void {
		zip(
			this.modelService.count(this.serviceContext),
			this.modelService.search(this.serviceContext)
		).pipe(
			finalize(() => this.loading = false)
		).subscribe(rs => {
			this.totalRecords = rs[0];
			this.data = rs[1];
		});
	}

	loadLazy(event: LazyLoadEvent): void {
		this.loading = true;

		this.bindSearchContext(event);
		this.modelService.search(this.serviceContext).pipe(finalize(() => {
			this.loading = false;
		})).subscribe(models => this.data = models);
	}

	reset(): void {
		this.serviceContext.reset();
		this.search();
	}

	onCreate() {
		if (this.editComponent) {
			this.editModel = this.modelService.create();
			this.editComponent.model = this.editModel;
			this.editComponent.onLoad();
			this.editDisplay = true;
		}
	}

	onSelect(event: any): void {
	}

	onAdd(event: any): void {
		if (event === undefined) {
			return;
		}

		event.actionCmd = ACTION_CMD_ADD;
		event.backRoute = this.getCurrentURL();

		if (event.data) {
			event.parent = event.data;
		}
		if (this.editComponent) {
			this.editComponent.editModel(event);
			this.editDisplay = true;
		} else if (this.editPage) {
			const queryParams: any = {};

			queryParams.actionCmd = ACTION_CMD_ADD;
			queryParams.backRoute = this.getCurrentURL();

			if (this.widgetConfig.primaryKeyName && event.data) {
				queryParams.primaryId = event.data[this.widgetConfig.primaryKeyName];
			}
			if (this.widgetConfig.partitionKeyName && event.data) {
				queryParams.partitionKey = event.data[this.widgetConfig.partitionKeyName];
			}
			if (this.widgetConfig.parentKeyName && event.parent) {
				queryParams.parentKey = event.parent[this.widgetConfig.parentKeyName];
			}
			if (this.widgetConfig.partitionKeyName && event.parent) {
				queryParams.parentPartitionKey = event.parent[this.widgetConfig.partitionKeyName];
			}

			this.navigateEdit(queryParams);
		}
	}

	onEdit(event: any): void {
		if (event === undefined) {
			return;
		}

		event.actionCmd = ACTION_CMD_EDIT;
		event.backRoute = this.getCurrentURL();
		event.master = this.master;

		if (this.editComponent) {
			this.editComponent.editModel(event);
			this.editDisplay = true;
		} else if (this.editPage) {
			const queryParams: any = {};

			queryParams.actionCmd = ACTION_CMD_EDIT;
			queryParams.backRoute = this.getCurrentURL();

			if (this.widgetConfig.primaryKeyName && event.data) {
				queryParams.primaryId = event.data[this.widgetConfig.primaryKeyName];
			}
			if (this.widgetConfig.partitionKeyName && event.data) {
				queryParams.partitionKey = event.data[this.widgetConfig.partitionKeyName];
			}
			queryParams.primaryId = event.primaryId;

			this.navigateEdit(queryParams);
		}
	}

	onDelete(event: any): void {
		const deleteEntries = this.getDeleteEntries();

		this.messageService.clear();

		if (!deleteEntries) {
			return;
		} else {
			this.confirmService.confirm({
				message: 'are-you-sure-to-delete-selected-records?',
				header: 'confirmation',
				key: 'confirm',
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					let successful = true;

					if (Array.isArray(deleteEntries)) {
						this.modelService.deleteBatch(deleteEntries).subscribe(model => {
							if (successful) {
								this.showSuccessful('selected-record-is-deleted');
							}

							this.search();
						}, error => {
							this.showError('error', 'error', error.error);

							successful = false;
						});
					} else {
						this.modelService.delete(deleteEntries).subscribe(model => {
							if (successful) {
								this.showSuccessful('selected-record-is-deleted');
							}

							this.search();
						}, error => {
							this.showError('error', 'error', error.error);

							successful = false;
						});
					}
				}
			});
		}
	}

	onClose(event: any): void {
		this.editDisplay = false;
		this.search();
	}

	getDeleteEntries(): any[] {
		return this.selected;
	}

	navigateEdit(queryParams: any) {
		this.router.navigate([this.editPage], {queryParams}).then();
	}
}
