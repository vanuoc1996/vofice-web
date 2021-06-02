import {plainToClass} from 'class-transformer';
import {DimensionTypeBase} from './base/dimension-type.model.base';

export class DimensionType extends DimensionTypeBase
{
	constructor()
	{
		super();
	}

	clone(): DimensionType {
		return plainToClass(DimensionType, this);
	}
}
