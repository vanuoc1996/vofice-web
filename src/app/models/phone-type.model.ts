import {plainToClass} from 'class-transformer';
import {PhoneTypeBase} from './base/phone-type.model.base';

export class PhoneType extends PhoneTypeBase
{
	constructor()
	{
		super();
	}

	clone(): PhoneType {
		return plainToClass(PhoneType, this);
	}
}
