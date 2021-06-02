import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ContactBank} from '../contact-bank.model';

export class ContactBankBase extends BaseModelImpl {
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
	bankId: number;
	name: string;
	IBAN: string;
	SWIFT: string;
	BIC: string;
	routingNumber: string;
	accountNumber: string;
	holderName: string;
	street1: string;
	street2: string;
	street3: string;
	city: string;
	zip: string;
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
