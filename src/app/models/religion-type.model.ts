import {plainToClass} from 'class-transformer';
import {ReligionTypeBase} from './base/religion-type.model.base';

export class ReligionType extends ReligionTypeBase
{
	constructor()
	{
		super();
	}

	clone(): ReligionType {
		return plainToClass(ReligionType, this);
	}
}
