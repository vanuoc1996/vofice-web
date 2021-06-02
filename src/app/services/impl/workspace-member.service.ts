import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkspaceMemberServiceBase} from '../base/workspace-member.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceMemberService extends WorkspaceMemberServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
