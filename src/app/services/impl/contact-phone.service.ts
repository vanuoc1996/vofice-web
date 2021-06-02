import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactPhoneServiceBase} from '../base/contact-phone.service.base';

@Injectable({providedIn: 'root'})
export class ContactPhoneService extends ContactPhoneServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
