import {plainToClass} from 'class-transformer';
import {ContactPhoneBase} from './base/contact-phone.model.base';

export class ContactPhone extends ContactPhoneBase
{
	constructor()
	{
		super();
	}

	clone(): ContactPhone {
		return plainToClass(ContactPhone, this);
	}
}
