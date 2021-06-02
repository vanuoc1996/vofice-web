import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmailTypeServiceBase} from '../base/email-type.service.base';

@Injectable({providedIn: 'root'})
export class EmailTypeService extends EmailTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
