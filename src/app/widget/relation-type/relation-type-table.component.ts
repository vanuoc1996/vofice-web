import {ChangeDetectorRef, Component} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {DialogService} from 'primeng/dynamicdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RelationTypeService} from '../../services/impl/relation-type.service';
import {RelationTypeTableBaseComponent} from './base/relation-type-table.component.base';
import {TABLE_CONFIG} from './config/table-config.js';

@Component({
	selector: 'app-relation-type-table',
	templateUrl: './html/relation-type-table.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RelationTypeTableComponent,
			multi: true
		}
	]
})
export class RelationTypeTableComponent extends RelationTypeTableBaseComponent {
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
		modelService: RelationTypeService) {

		super(
			TABLE_CONFIG.layout, http, router, activatedRoute, cdRef, formBuilder
			, translateService, dialogService, confirmService, messageService, modelService);
	}
}
