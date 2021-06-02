import {plainToClass} from 'class-transformer';
import {ProcessChecklistBase} from './base/process-checklist.model.base';

export class ProcessChecklist extends ProcessChecklistBase
{
	constructor()
	{
		super();
	}

	clone(): ProcessChecklist {
		return plainToClass(ProcessChecklist, this);
	}
}
