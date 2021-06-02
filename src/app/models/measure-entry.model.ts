import {plainToClass} from 'class-transformer';
import {MeasureEntryBase} from './base/measure-entry.model.base';

export class MeasureEntry extends MeasureEntryBase
{
	constructor()
	{
		super();
	}

	clone(): MeasureEntry {
		return plainToClass(MeasureEntry, this);
	}
}
