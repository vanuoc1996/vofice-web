import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ContactEmail} from '../contact-email.model';

export class ContactEmailBase extends BaseModelImpl {
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
	email: string;
	mailing: boolean;
	main: boolean;
	verified: boolean;
	description: string;
	status: number;
	statusByUserId: number;
	statusByUserName: string;
	statusDate: Date;


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
