import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspaceAttachmentServiceBase} from '../base/workspace-attachment.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceAttachmentService extends WorkspaceAttachmentServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
