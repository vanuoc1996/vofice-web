import {Injector } from '@angular/core';
import {AbstractBundleService} from '../core/services/abstract-bundle-service';
import {ContactAddressService} from './impl/contact-address.service';
import {ContactBankService} from './impl/contact-bank.service';
import {ContactEmailService} from './impl/contact-email.service';
import {ContactPhoneService} from './impl/contact-phone.service';
import {ContactSocialService} from './impl/contact-social.service';

export class ContactBundleServiceBase extends BundleServiceAbstract {
	protected _contactAddressService: ContactAddressService;
	protected _contactBankService: ContactBankService;
	protected _contactEmailService: ContactEmailService;
	protected _contactPhoneService: ContactPhoneService;
	protected _contactSocialService: ContactSocialService;

	constructor(protected injector: Injector) {
		super(injector);
	}

	get contactAddressService(): ContactAddressService {
		if (!this._contactAddressService) {
			this._contactAddressService = this.injector.get(ContactAddressService);
		}
		return this._contactAddressService;
	}
	get contactBankService(): ContactBankService {
		if (!this._contactBankService) {
			this._contactBankService = this.injector.get(ContactBankService);
		}
		return this._contactBankService;
	}
	get contactEmailService(): ContactEmailService {
		if (!this._contactEmailService) {
			this._contactEmailService = this.injector.get(ContactEmailService);
		}
		return this._contactEmailService;
	}
	get contactPhoneService(): ContactPhoneService {
		if (!this._contactPhoneService) {
			this._contactPhoneService = this.injector.get(ContactPhoneService);
		}
		return this._contactPhoneService;
	}
	get contactSocialService(): ContactSocialService {
		if (!this._contactSocialService) {
			this._contactSocialService = this.injector.get(ContactSocialService);
		}
		return this._contactSocialService;
	}
}
