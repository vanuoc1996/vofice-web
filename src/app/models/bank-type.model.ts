import {plainToClass} from 'class-transformer';
import {BankTypeBase} from './base/bank-type.model.base';

export class BankType extends BankTypeBase
{
	constructor()
	{
		super();
	}

	clone(): BankType {
		return plainToClass(BankType, this);
	}
}
