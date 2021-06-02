import {plainToClass} from 'class-transformer';
import {ContactBankBase} from './base/contact-bank.model.base';

export class ContactBank extends ContactBankBase
{
	constructor()
	{
		super();
	}

	clone(): ContactBank {
		return plainToClass(ContactBank, this);
	}
}
