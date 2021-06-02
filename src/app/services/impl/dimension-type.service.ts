import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DimensionTypeServiceBase} from '../base/dimension-type.service.base';

@Injectable({providedIn: 'root'})
export class DimensionTypeService extends DimensionTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
