import {BaseModelImpl} from '../../core/models/base-impl.model';
import {WorkspaceMember} from '../workspace-member.model';

export class WorkspaceMemberBase extends BaseModelImpl {
	memberId: number;
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
		return this.memberId;
	}

	setPrimary( memberId: number = 0): void {
		this.memberId = memberId;
	}
}
