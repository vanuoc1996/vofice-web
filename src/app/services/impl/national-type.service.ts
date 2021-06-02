import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NationalTypeServiceBase} from '../base/national-type.service.base';

@Injectable({providedIn: 'root'})
export class NationalTypeService extends NationalTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
