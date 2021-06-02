import {plainToClass} from 'class-transformer';
import {WorkspaceEntryBase} from './base/workspace-entry.model.base';

export class WorkspaceEntry extends WorkspaceEntryBase
{
	constructor()
	{
		super();
	}

	clone(): WorkspaceEntry {
		return plainToClass(WorkspaceEntry, this);
	}
}
