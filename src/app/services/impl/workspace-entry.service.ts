import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspaceEntryServiceBase} from '../base/workspace-entry.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceEntryService extends WorkspaceEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
