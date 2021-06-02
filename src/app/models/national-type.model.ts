import {plainToClass} from 'class-transformer';
import {NationalTypeBase} from './base/national-type.model.base';

export class NationalType extends NationalTypeBase
{
	constructor()
	{
		super();
	}

	clone(): NationalType {
		return plainToClass(NationalType, this);
	}
}
