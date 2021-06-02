import {plainToClass} from 'class-transformer';
import {WorkspaceAttachmentBase} from './base/workspace-attachment.model.base';

export class WorkspaceAttachment extends WorkspaceAttachmentBase
{
	constructor()
	{
		super();
	}

	clone(): WorkspaceAttachment {
		return plainToClass(WorkspaceAttachment, this);
	}
}
