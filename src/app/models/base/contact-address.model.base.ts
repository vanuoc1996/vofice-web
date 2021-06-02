import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ContactAddress} from '../contact-address.model';

export class ContactAddressBase extends BaseModelImpl {
	contactId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	resourceName: string;
	resourceId: number;
	typeId: number;
	name: string;
	street1: string;
	street2: string;
	street3: string;
	city: string;
	zip: string;
	longitude: number;
	latitude: number;
	regionId: number;
	countryId: number;
	territoryId: number;
	mailing: boolean;
	main: boolean;
	verified: boolean;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.contactId;
	}

	setPrimary( contactId: number = 0): void {
		this.contactId = contactId;
	}
}
