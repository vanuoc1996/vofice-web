import {plainToClass} from 'class-transformer';
import {CompanyTypeBase} from './base/company-type.model.base';

export class CompanyType extends CompanyTypeBase
{
	constructor()
	{
		super();
	}

	clone(): CompanyType {
		return plainToClass(CompanyType, this);
	}
}
