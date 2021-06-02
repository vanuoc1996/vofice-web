import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {TerritoryEntryService} from '../../services/impl/territory-entry.service';
import {TerritoryTreeBaseComponent} from './base/territory-entry-tree.component.base';
import {TREE_CONFIG} from './config/tree-config.js';

@Component({
	selector: 'app-territory-tree',
	templateUrl: './html/territory-entry-tree.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: TerritoryTreeComponent,
			multi: true
		}
	]
})
export class TerritoryTreeComponent extends TerritoryTreeBaseComponent {
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
		modelService: TerritoryEntryService) {

		super(TREE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder, translateService, dialogService, confirmService, messageService, modelService);
	}
}
