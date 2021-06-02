import {plainToClass} from 'class-transformer';
import {LicenseTypeBase} from './base/license-type.model.base';

export class LicenseType extends LicenseTypeBase
{
	constructor()
	{
		super();
	}

	clone(): LicenseType {
		return plainToClass(LicenseType, this);
	}
}
