import {plainToClass} from 'class-transformer';
import {PartnerRelationBase} from './base/partner-relation.model.base';

export class PartnerRelation extends PartnerRelationBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerRelation {
		return plainToClass(PartnerRelation, this);
	}
}
