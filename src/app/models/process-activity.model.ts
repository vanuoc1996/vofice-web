import {plainToClass} from 'class-transformer';
import {ProcessActivityBase} from './base/process-activity.model.base';

export class ProcessActivity extends ProcessActivityBase
{
	constructor()
	{
		super();
	}

	clone(): ProcessActivity {
		return plainToClass(ProcessActivity, this);
	}
}
