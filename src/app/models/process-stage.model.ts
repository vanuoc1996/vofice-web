import {plainToClass} from 'class-transformer';
import {ProcessStageBase} from './base/process-stage.model.base';

export class ProcessStage extends ProcessStageBase
{
	constructor()
	{
		super();
	}

	clone(): ProcessStage {
		return plainToClass(ProcessStage, this);
	}
}
