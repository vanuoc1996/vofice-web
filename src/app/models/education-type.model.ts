import {plainToClass} from 'class-transformer';
import {EducationTypeBase} from './base/education-type.model.base';

export class EducationType extends EducationTypeBase
{
	constructor()
	{
		super();
	}

	clone(): EducationType {
		return plainToClass(EducationType, this);
	}
}
