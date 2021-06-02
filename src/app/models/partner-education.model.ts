import {plainToClass} from 'class-transformer';
import {PartnerEducationBase} from './base/partner-education.model.base';

export class PartnerEducation extends PartnerEducationBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerEducation {
		return plainToClass(PartnerEducation, this);
	}
}
