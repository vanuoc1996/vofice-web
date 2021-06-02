import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PositionTypeServiceBase} from '../base/position-type.service.base';

@Injectable({providedIn: 'root'})
export class PositionTypeService extends PositionTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
