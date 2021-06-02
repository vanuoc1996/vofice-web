import {BaseModelImpl} from '../../core/models/base-impl.model';
import {WorkspaceEntry} from '../workspace-entry.model';
import {WorkspaceMember} from '../workspace-member.model';
import {WorkspaceAttachment} from '../workspace-attachment.model';
import {WorkspaceComment} from '../workspace-comment.model';
import {WorkspaceApproval} from '../workspace-approval.model';

export class WorkspaceEntryBase extends BaseModelImpl {
	workspaceId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	parentId: number;
	leftId: number;
	rightId: number;
	lru: number;
	code: string;
	name: string;
	inviteType: number;
	confirmType: number;
	resourceName: string;
	resourceId: number;
	creatorId: number;
	folderId: number;
	fileEntryId: number;
	fileEntryTypeId: number;
	wiki: boolean;
	gallery: boolean;
	conversation: boolean;
	chat: boolean;
	calendar: boolean;
	task: boolean;
	search: boolean;
	drive: boolean;
	visible: boolean;
	opened: boolean;
	archived: boolean;
	project: boolean;
	startDate: Date;
	endDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;

	moderator: WorkspaceMember[];
	worker: WorkspaceMember[];
	monitor: WorkspaceMember[];
	approver: WorkspaceMember[];
	attachments: WorkspaceAttachment[];
	comments: WorkspaceComment[];
	approval: WorkspaceApproval[];

	constructor(){
		super();
	}

	getPrimary(): number {
		return this.workspaceId;
	}

	setPrimary( workspaceId: number = 0): void {
		this.workspaceId = workspaceId;
	}
}
