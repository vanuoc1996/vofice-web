import {plainToClass} from 'class-transformer';
import {HobbyTypeBase} from './base/hobby-type.model.base';

export class HobbyType extends HobbyTypeBase
{
	constructor()
	{
		super();
	}

	clone(): HobbyType {
		return plainToClass(HobbyType, this);
	}
}
