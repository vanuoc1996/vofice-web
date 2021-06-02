import {BaseModelImpl} from '../../core/models/base-impl.model';
import {WorkspaceComment} from '../workspace-comment.model';

export class WorkspaceCommentBase extends BaseModelImpl {
	commentId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	workspaceId: number;
	attachedId: number;
	content: string;
	userRating: number;
	lastPublishDate: Date;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.commentId;
	}

	setPrimary( commentId: number = 0): void {
		this.commentId = commentId;
	}
}
