import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CompanyTypeServiceBase} from '../base/company-type.service.base';

@Injectable({providedIn: 'root'})
export class CompanyTypeService extends CompanyTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
