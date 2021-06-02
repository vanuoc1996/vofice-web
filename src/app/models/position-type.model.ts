import {plainToClass} from 'class-transformer';
import {PositionTypeBase} from './base/position-type.model.base';

export class PositionType extends PositionTypeBase
{
	constructor()
	{
		super();
	}

	clone(): PositionType {
		return plainToClass(PositionType, this);
	}
}
