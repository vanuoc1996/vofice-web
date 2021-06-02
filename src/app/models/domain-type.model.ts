import {plainToClass} from 'class-transformer';
import {DomainTypeBase} from './base/domain-type.model.base';

export class DomainType extends DomainTypeBase
{
	constructor()
	{
		super();
	}

	clone(): DomainType {
		return plainToClass(DomainType, this);
	}
}
