import {plainToClass} from 'class-transformer';
import {AddressTypeBase} from './base/address-type.model.base';

export class AddressType extends AddressTypeBase
{
	constructor()
	{
		super();
	}

	clone(): AddressType {
		return plainToClass(AddressType, this);
	}
}
