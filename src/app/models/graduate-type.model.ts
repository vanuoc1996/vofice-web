import {plainToClass} from 'class-transformer';
import {GraduateTypeBase} from './base/graduate-type.model.base';

export class GraduateType extends GraduateTypeBase
{
	constructor()
	{
		super();
	}

	clone(): GraduateType {
		return plainToClass(GraduateType, this);
	}
}
