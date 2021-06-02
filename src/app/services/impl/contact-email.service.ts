import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactEmailServiceBase} from '../base/contact-email.service.base';

@Injectable({providedIn: 'root'})
export class ContactEmailService extends ContactEmailServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
