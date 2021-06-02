import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PhoneTypeServiceBase} from '../base/phone-type.service.base';

@Injectable({providedIn: 'root'})
export class PhoneTypeService extends PhoneTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
