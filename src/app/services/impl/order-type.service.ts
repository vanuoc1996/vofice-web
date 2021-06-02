import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrderTypeServiceBase} from '../base/order-type.service.base';

@Injectable({providedIn: 'root'})
export class OrderTypeService extends OrderTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
