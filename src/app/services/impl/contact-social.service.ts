import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactSocialServiceBase} from '../base/contact-social.service.base';

@Injectable({providedIn: 'root'})
export class ContactSocialService extends ContactSocialServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
