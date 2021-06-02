import {BaseModelImpl} from '../../core/models/base-impl.model';
import {WorkspaceApproval} from '../workspace-approval.model';
import {PartnerEntry} from '../partner-entry.model';

export class WorkspaceApprovalBase extends BaseModelImpl {
	approvalId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	workspaceId: number;
	partnerId: number;
	mailing: boolean;
	verified: boolean;
	step: number;
	startDate: Date;
	endDate: Date;
	approveDate: Date;
	approveStatus: number;
	signature: string;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;

	partner: PartnerEntry;

	constructor(){
		super();
	}

	getPrimary(): number {
		return this.approvalId;
	}

	setPrimary( approvalId: number = 0): void {
		this.approvalId = approvalId;
	}
}
