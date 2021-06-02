import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerLicense} from '../partner-license.model';

export class PartnerLicenseBase extends BaseModelImpl {
	licenseId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	partnerId: number;
	typeId: number;
	licenseNo: string;
	issuer: string;
	issueOrgId: number;
	issueDate: Date;
	expireDate: Date;
	termDate: Date;
	startDate: Date;
	endDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.licenseId;
	}

	setPrimary( licenseId: number = 0): void {
		this.licenseId = licenseId;
	}
}
