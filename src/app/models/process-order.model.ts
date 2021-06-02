import {plainToClass} from 'class-transformer';
import {ProcessOrderBase} from './base/process-order.model.base';

export class ProcessOrder extends ProcessOrderBase
{
	constructor()
	{
		super();
	}

	clone(): ProcessOrder {
		return plainToClass(ProcessOrder, this);
	}
}
