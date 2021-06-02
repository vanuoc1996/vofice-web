import {plainToClass} from 'class-transformer';
import {PartnerHobbyBase} from './base/partner-hobby.model.base';

export class PartnerHobby extends PartnerHobbyBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerHobby {
		return plainToClass(PartnerHobby, this);
	}
}
