import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ContactSocial} from '../contact-social.model';

export class ContactSocialBase extends BaseModelImpl {
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
	screenName: string;
	displayName: string;
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
