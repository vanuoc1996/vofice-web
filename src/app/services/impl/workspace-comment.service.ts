import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspaceCommentServiceBase} from '../base/workspace-comment.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceCommentService extends WorkspaceCommentServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
