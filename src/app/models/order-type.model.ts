import {plainToClass} from 'class-transformer';
import {OrderTypeBase} from './base/order-type.model.base';

export class OrderType extends OrderTypeBase
{
	constructor()
	{
		super();
	}

	clone(): OrderType {
		return plainToClass(OrderType, this);
	}
}
