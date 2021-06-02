import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IndustryTypeServiceBase} from '../base/industry-type.service.base';

@Injectable({providedIn: 'root'})
export class IndustryTypeService extends IndustryTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
