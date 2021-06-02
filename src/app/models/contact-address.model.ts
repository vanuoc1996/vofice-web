import {plainToClass} from 'class-transformer';
import {ContactAddressBase} from './base/contact-address.model.base';

export class ContactAddress extends ContactAddressBase
{
	constructor()
	{
		super();
	}

	clone(): ContactAddress {
		return plainToClass(ContactAddress, this);
	}
}
