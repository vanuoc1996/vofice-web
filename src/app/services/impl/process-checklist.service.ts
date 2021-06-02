import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessChecklistServiceBase} from '../base/process-checklist.service.base';

@Injectable({providedIn: 'root'})
export class ProcessChecklistService extends ProcessChecklistServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
