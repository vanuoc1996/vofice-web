import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessOrderServiceBase} from '../base/process-order.service.base';

@Injectable({providedIn: 'root'})
export class ProcessOrderService extends ProcessOrderServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
