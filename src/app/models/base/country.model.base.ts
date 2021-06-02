import {BaseModelImpl} from '../../core/models/base-impl.model';
import {Country} from '../country.model';

export class CountryBase extends BaseModelImpl {
	countryId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	code: string;
	name: string;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.countryId;
	}

	setPrimary( countryId: number = 0): void {
		this.countryId = countryId;
	}
}
