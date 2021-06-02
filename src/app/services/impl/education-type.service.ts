import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EducationTypeServiceBase} from '../base/education-type.service.base';

@Injectable({providedIn: 'root'})
export class EducationTypeService extends EducationTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
