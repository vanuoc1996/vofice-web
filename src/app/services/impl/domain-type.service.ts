import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomainTypeServiceBase} from '../base/domain-type.service.base';

@Injectable({providedIn: 'root'})
export class DomainTypeService extends DomainTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
