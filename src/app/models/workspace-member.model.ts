import {plainToClass} from 'class-transformer';
import {WorkspaceMemberBase} from './base/workspace-member.model.base';

export class WorkspaceMember extends WorkspaceMemberBase
{
	constructor()
	{
		super();
	}

	clone(): WorkspaceMember {
		return plainToClass(WorkspaceMember, this);
	}
}
