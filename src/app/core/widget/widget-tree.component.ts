import {ChangeDetectorRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ConfirmationService, LazyLoadEvent, MessageService, TreeNode} from 'primeng/api';
import {CloudTreeModelService} from '../services/cloud-model-service';
import {WidgetTableComponent} from './widget-table.component';
import {zip} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {WidgetTreeConfig} from './widget.model';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';

// @Component({
// 	selector: 'app-widget-tree-base',
// 	template: ``
// })
export class WidgetTreeComponent extends WidgetTableComponent implements OnInit, ControlValueAccessor, Validators {
	rootLabel = 'N/A';
	selected: any;
	enableRoot = true;

	rootNode: TreeNode;
	treeNodes: TreeNode[] = [];

	constructor(
		public widgetConfig: WidgetTreeConfig,
		protected http: HttpClient,
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected cdRef: ChangeDetectorRef,
		protected formBuilder: FormBuilder,
		protected translateService: TranslateService,
		protected dialogService: DialogService,
		protected confirmService: ConfirmationService,
		protected messageService: MessageService,
		protected modelService: CloudTreeModelService) {

		super(widgetConfig, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}

	ngOnInit(): void {
		super.ngOnInit();

		if (this.enableRoot) {
			this.createRoot();
		} else {
			this.search();
		}
	}

	protected createRoot(): void {
		this.rootNode = {
			label: this.rootLabel,
			data: {},
			expandedIcon: this.widgetConfig.expandedIcon,
			collapsedIcon: this.widgetConfig.collapsedIcon,
			leaf: false
		};

		this.search();
	}

	loadLazy(event: LazyLoadEvent): void {
		this.loading = true;

		this.bindSearchContext(event);

		this.modelService.search(this.serviceContext)
			.pipe(
				finalize(() => {
					this.loading = false;
				}))
			.subscribe(entries => {
				this.treeNodes = [];
				this.data = entries;
				this.data.forEach(entry => {
					if (entry.parentId === 0) {
						this.treeNodes.push({
							data: entry,
							leaf: false,
							expandedIcon: this.widgetConfig.expandedIcon,
							collapsedIcon: this.widgetConfig.collapsedIcon,
						});
					}
				});
			});
	}

	onSearch(): void {
		zip(
			this.modelService.count(this.serviceContext),
			this.modelService.search(this.serviceContext)
		).pipe(
			finalize(() => this.loading = false)
		).subscribe(rs => {
			this.treeNodes = [];
			this.totalRecords = rs[0];
			this.data = rs[1];

			this.data.forEach(entry => {
				if (entry.parentId === 0){
					this.treeNodes.push({
						data: entry,
						leaf: false,
						expandedIcon: this.widgetConfig.expandedIcon,
						collapsedIcon: this.widgetConfig.collapsedIcon,
					});
				}
			});
		});
	}

	onNodeExpand(event) {
		this.loading = true;
		const node = event.node;

		if (this.modelService) {
			const primaryKey = node.data[this.widgetConfig.primaryKeyName];
			const partitionKey = this.widgetConfig.partitionKeyName ? null : node.data[this.widgetConfig.partitionKeyName];

			if (this.widgetConfig.partitionKeyName) {
				this.modelService.getChildrenByPartition(primaryKey, partitionKey).pipe().subscribe(entries => {
					node.children = [];

					entries.forEach(entry => {
						node.children.push({
							data: entry,
							leaf: false,
							expandedIcon: this.widgetConfig.expandedIcon,
							collapsedIcon: this.widgetConfig.collapsedIcon,
						});
					});

					this.treeNodes = [...this.treeNodes];
					this.loading = false;
				});
			} else {
				this.modelService.getChildren(primaryKey).pipe().subscribe(entries => {
					node.children = [];

					entries.forEach(entry => {
						node.children.push({
							data: entry,
							leaf: false,
							expandedIcon: this.widgetConfig.expandedIcon,
							collapsedIcon: this.widgetConfig.collapsedIcon,
						});
					});

					this.treeNodes = [...this.treeNodes];
					this.loading = false;
				});
			}
		} else {
			this.loading = false;
		}
	}

	writeValue(value: any) {
	}

	handleOnChange(event) {
	}

	getDeleteEntries(): any[] {
		const deleteEntries = [];

		this.selected.forEach(entry => {
			if (entry.data) {
				deleteEntries.push(entry.data);
			}
		});

		return deleteEntries;
	}

}
