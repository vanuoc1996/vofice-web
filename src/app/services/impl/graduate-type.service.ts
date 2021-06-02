import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GraduateTypeServiceBase} from '../base/graduate-type.service.base';

@Injectable({providedIn: 'root'})
export class GraduateTypeService extends GraduateTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
