import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DepartmentTypeServiceBase} from '../base/department-type.service.base';

@Injectable({providedIn: 'root'})
export class DepartmentTypeService extends DepartmentTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
