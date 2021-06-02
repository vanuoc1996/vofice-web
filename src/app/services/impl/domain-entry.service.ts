import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomainEntryServiceBase} from '../base/domain-entry.service.base';

@Injectable({providedIn: 'root'})
export class DomainEntryService extends DomainEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
