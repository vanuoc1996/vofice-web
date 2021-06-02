import {plainToClass} from 'class-transformer';
import {CountryBase} from './base/country.model.base';

export class Country extends CountryBase
{
	constructor()
	{
		super();
	}

	clone(): Country {
		return plainToClass(Country, this);
	}
}
