import {plainToClass} from 'class-transformer';
import {DataTypeBase} from './base/data-type.model.base';

export class DataType extends DataTypeBase
{
	constructor()
	{
		super();
	}

	clone(): DataType {
		return plainToClass(DataType, this);
	}
}
