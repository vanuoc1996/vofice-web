import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {AddressTypeService} from '../../services/impl/address-type.service';
import {AddressTypeSelectBaseComponent} from './base/address-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-address-type-select',
	templateUrl: './html/address-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: AddressTypeSelectComponent,
			multi: true
		}
	]
})
export class AddressTypeSelectComponent extends AddressTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: AddressTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
