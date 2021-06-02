import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessActivityServiceBase} from '../base/process-activity.service.base';

@Injectable({providedIn: 'root'})
export class ProcessActivityService extends ProcessActivityServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
