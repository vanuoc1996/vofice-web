import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DocumentTypeService} from '../../services/impl/document-type.service';
import {DocumentTypeSelectBaseComponent} from './base/document-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-document-type-select',
	templateUrl: './html/document-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DocumentTypeSelectComponent,
			multi: true
		}
	]
})
export class DocumentTypeSelectComponent extends DocumentTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DocumentTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
