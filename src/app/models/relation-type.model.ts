import {plainToClass} from 'class-transformer';
import {RelationTypeBase} from './base/relation-type.model.base';

export class RelationType extends RelationTypeBase
{
	constructor()
	{
		super();
	}

	clone(): RelationType {
		return plainToClass(RelationType, this);
	}
}
