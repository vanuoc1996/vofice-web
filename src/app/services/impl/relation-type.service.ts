import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RelationTypeServiceBase} from '../base/relation-type.service.base';

@Injectable({providedIn: 'root'})
export class RelationTypeService extends RelationTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
