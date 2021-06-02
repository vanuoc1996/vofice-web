import {plainToClass} from 'class-transformer';
import {TerritoryEntryBase} from './base/territory-entry.model.base';

export class TerritoryEntry extends TerritoryEntryBase
{
	constructor()
	{
		super();
	}

	clone(): TerritoryEntry {
		return plainToClass(TerritoryEntry, this);
	}
}
