import {plainToClass} from 'class-transformer';
import {EmailTypeBase} from './base/email-type.model.base';

export class EmailType extends EmailTypeBase
{
	constructor()
	{
		super();
	}

	clone(): EmailType {
		return plainToClass(EmailType, this);
	}
}
