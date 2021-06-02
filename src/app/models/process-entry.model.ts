import {plainToClass} from 'class-transformer';
import {ProcessEntryBase} from './base/process-entry.model.base';

export class ProcessEntry extends ProcessEntryBase
{
	constructor()
	{
		super();
	}

	clone(): ProcessEntry {
		return plainToClass(ProcessEntry, this);
	}
}
