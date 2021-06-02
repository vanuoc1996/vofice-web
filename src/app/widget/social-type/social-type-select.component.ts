import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {SocialTypeService} from '../../services/impl/social-type.service';
import {SocialTypeSelectBaseComponent} from './base/social-type-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-social-type-select',
	templateUrl: './html/social-type-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SocialTypeSelectComponent,
			multi: true
		}
	]
})
export class SocialTypeSelectComponent extends SocialTypeSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: SocialTypeService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
