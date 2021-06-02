import {plainToClass} from 'class-transformer';
import {PartnerTypeBase} from './base/partner-type.model.base';

export class PartnerType extends PartnerTypeBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerType {
		return plainToClass(PartnerType, this);
	}
}
