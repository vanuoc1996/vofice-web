import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RelationTypeService} from '../../services/impl/relation-type.service';
import {RelationTypeSelectBaseComponent} from './base/relation-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-relation-type-select',
	templateUrl: './html/relation-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RelationTypeSelectComponent,
			multi: true
		}
	]
})
export class RelationTypeSelectComponent extends RelationTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: RelationTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
