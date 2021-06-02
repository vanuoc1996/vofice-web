import {ChangeDetectorRef, Component} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactSocialService} from '../../services/impl/contact-social.service';
import {ContactSocialSelectBaseComponent} from './base/contact-social-select.component.base';
import {SELECT_CONFIG} from './config/select-config.js';

@Component({
	selector: 'app-contact-social-select',
	templateUrl: './html/contact-social-select.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: ContactSocialSelectComponent,
			multi: true
		}
	]
})
export class ContactSocialSelectComponent extends ContactSocialSelectBaseComponent {
	constructor(
		http: HttpClient,
		router: Router,
		activatedRoute: ActivatedRoute,
		cdRef: ChangeDetectorRef,
		translateService: TranslateService,
		confirmService: ConfirmationService,
		messageService: MessageService,
		modelService: ContactSocialService) {

		super(SELECT_CONFIG.layout, http, router, activatedRoute, cdRef, translateService, confirmService, messageService, modelService);
	}
}
