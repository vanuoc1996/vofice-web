import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OccupationTypeServiceBase} from '../base/occupation-type.service.base';

@Injectable({providedIn: 'root'})
export class OccupationTypeService extends OccupationTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
