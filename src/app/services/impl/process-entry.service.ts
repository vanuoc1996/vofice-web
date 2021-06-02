import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessEntryServiceBase} from '../base/process-entry.service.base';

@Injectable({providedIn: 'root'})
export class ProcessEntryService extends ProcessEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
