import {plainToClass} from 'class-transformer';
import {ContactEmailBase} from './base/contact-email.model.base';

export class ContactEmail extends ContactEmailBase
{
	constructor()
	{
		super();
	}

	clone(): ContactEmail {
		return plainToClass(ContactEmail, this);
	}
}
