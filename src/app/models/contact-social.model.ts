import {plainToClass} from 'class-transformer';
import {ContactSocialBase} from './base/contact-social.model.base';

export class ContactSocial extends ContactSocialBase
{
	constructor()
	{
		super();
	}

	clone(): ContactSocial {
		return plainToClass(ContactSocial, this);
	}
}
