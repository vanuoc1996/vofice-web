import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BankTypeServiceBase} from '../base/bank-type.service.base';

@Injectable({providedIn: 'root'})
export class BankTypeService extends BankTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
