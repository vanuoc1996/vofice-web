import {plainToClass} from 'class-transformer';
import {PartnerExperienceBase} from './base/partner-experience.model.base';

export class PartnerExperience extends PartnerExperienceBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerExperience {
		return plainToClass(PartnerExperience, this);
	}
}
