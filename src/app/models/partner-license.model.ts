import {plainToClass} from 'class-transformer';
import {PartnerLicenseBase} from './base/partner-license.model.base';

export class PartnerLicense extends PartnerLicenseBase
{
	constructor()
	{
		super();
	}

	clone(): PartnerLicense {
		return plainToClass(PartnerLicense, this);
	}
}
