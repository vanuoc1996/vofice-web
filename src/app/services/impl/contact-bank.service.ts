import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ContactBankServiceBase} from '../base/contact-bank.service.base';

@Injectable({providedIn: 'root'})
export class ContactBankService extends ContactBankServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
