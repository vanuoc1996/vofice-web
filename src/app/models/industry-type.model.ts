import {plainToClass} from 'class-transformer';
import {IndustryTypeBase} from './base/industry-type.model.base';

export class IndustryType extends IndustryTypeBase
{
	constructor()
	{
		super();
	}

	clone(): IndustryType {
		return plainToClass(IndustryType, this);
	}
}
