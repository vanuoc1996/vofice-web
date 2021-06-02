import {plainToClass} from 'class-transformer';
import {OccupationTypeBase} from './base/occupation-type.model.base';

export class OccupationType extends OccupationTypeBase
{
	constructor()
	{
		super();
	}

	clone(): OccupationType {
		return plainToClass(OccupationType, this);
	}
}
