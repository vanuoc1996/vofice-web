import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ContactPhone} from '../contact-phone.model';

export class ContactPhoneBase extends BaseModelImpl {
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
	countryId: number;
	phoneNumber: string;
	extension: string;
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
