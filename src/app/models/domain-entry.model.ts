import {plainToClass} from 'class-transformer';
import {DomainEntryBase} from './base/domain-entry.model.base';

export class DomainEntry extends DomainEntryBase
{
	constructor()
	{
		super();
	}

	clone(): DomainEntry {
		return plainToClass(DomainEntry, this);
	}
}
