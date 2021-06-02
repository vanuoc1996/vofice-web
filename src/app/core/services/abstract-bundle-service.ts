import {Injector} from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ContactAddressService} from '../../services/impl/contact_address.service';

export abstract class AbstractBundleService {

	protected _messageService: MessageService;
	protected _confirmationService: ConfirmationService

	protected constructor(protected injector: Injector) {
	}

	get messageService(): MessageService {
		if (!this._messageService) {
			this._messageService = this.injector.get(MessageService);
		}
		return this._messageService;
	}

	get confirmationService(): ConfirmationService {
		if (!this._confirmationService) {
			this._confirmationService = this.injector.get(ConfirmationService);
		}

		return this._confirmationService;
	}
}
