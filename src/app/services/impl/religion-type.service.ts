import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ReligionTypeServiceBase} from '../base/religion-type.service.base';

@Injectable({providedIn: 'root'})
export class ReligionTypeService extends ReligionTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
