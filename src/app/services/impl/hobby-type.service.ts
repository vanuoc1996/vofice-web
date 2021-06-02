import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HobbyTypeServiceBase} from '../base/hobby-type.service.base';

@Injectable({providedIn: 'root'})
export class HobbyTypeService extends HobbyTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
