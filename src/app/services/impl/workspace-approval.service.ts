import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspaceApprovalServiceBase} from '../base/workspace-approval.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceApprovalService extends WorkspaceApprovalServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
