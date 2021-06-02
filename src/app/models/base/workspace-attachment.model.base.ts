import {BaseModelImpl} from '../../core/models/base-impl.model';
import {WorkspaceAttachment} from '../workspace-attachment.model';

export class WorkspaceAttachmentBase extends BaseModelImpl {
	attachId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	workspaceId: number;
	fileEntryId: number;
	fileEntryTypeId: number;
	title: string;
	issueNo: string;
	issueDate: Date;
	expireDate: Date;
	issueOrgId: number;
	issuer: string;
	content: string;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.attachId;
	}

	setPrimary( attachId: number = 0): void {
		this.attachId = attachId;
	}
}
