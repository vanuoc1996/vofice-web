import {plainToClass} from 'class-transformer';
import {WorkspaceApprovalBase} from './base/workspace-approval.model.base';

export class WorkspaceApproval extends WorkspaceApprovalBase
{
	constructor()
	{
		super();
	}

	clone(): WorkspaceApproval {
		return plainToClass(WorkspaceApproval, this);
	}
}
