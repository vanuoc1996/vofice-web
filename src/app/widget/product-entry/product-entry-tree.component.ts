import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ProductEntryService} from '../../services/impl/product-entry.service';
import {ProductTreeBaseComponent} from './base/product-entry-tree.component.base';
import {TREE_CONFIG} from './config/tree-config.js';

@Component({
	selector: 'app-product-tree',
	templateUrl: './html/product-entry-tree.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ProductTreeComponent,
			multi: true
		}
	]
})
export class ProductTreeComponent extends ProductTreeBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		formBuilder: FormBuilder,
		translateService: TranslateService,
		dialogService: DialogService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ProductEntryService) {

		super(TREE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
