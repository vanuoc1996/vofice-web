import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataTypeServiceBase} from '../base/data-type.service.base';

@Injectable({providedIn: 'root'})
export class DataTypeService extends DataTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
