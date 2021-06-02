import {BaseModelImpl} from '../../core/models/base-impl.model';
import {TerritoryEntry} from '../territory-entry.model';
import {Country} from '../country.model';

export class TerritoryEntryBase extends BaseModelImpl {
	territoryId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	parentId: number;
	leftId: number;
	rightId: number;
	lru: number;
	type: string;
	code: string;
	parentCode: string;
	province: string;
	district: string;
	village: string;
	building: string;
	name: string;
	fullName: string;
	countryId: number;
	regionId: number;
	longitude: number;
	latitude: number;
	startDate: Date;
	endDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;

	country: Country;

	constructor(){
		super();
	}

	getPrimary(): number {
		return this.territoryId;
	}

	setPrimary( territoryId: number = 0): void {
		this.territoryId = territoryId;
	}
}
