import {plainToClass} from 'class-transformer';
import {WorkspaceCommentBase} from './base/workspace-comment.model.base';

export class WorkspaceComment extends WorkspaceCommentBase
{
	constructor()
	{
		super();
	}

	clone(): WorkspaceComment {
		return plainToClass(WorkspaceComment, this);
	}
}
