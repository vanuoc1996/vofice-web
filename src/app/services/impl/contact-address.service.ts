import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactAddressServiceBase} from '../base/contact-address.service.base';

@Injectable({providedIn: 'root'})
export class ContactAddressService extends ContactAddressServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
