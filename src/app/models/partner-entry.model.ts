import {plainToClass} from 'class-transformer';
import {PartnerEntryBase} from './base/partner-entry.model.base';

export class PartnerEntry extends PartnerEntryBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerEntry {
		return plainToClass(PartnerEntry, this);
	}
}
