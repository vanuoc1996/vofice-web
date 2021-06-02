import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {DomainEntryService} from '../../services/impl/domain-entry.service';
import {DomainSelectBaseComponent} from './base/domain-entry-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-domain-select',
	templateUrl: './html/domain-entry-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: DomainSelectComponent,
			multi: true
		}
	]
})
export class DomainSelectComponent extends DomainSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: DomainEntryService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
