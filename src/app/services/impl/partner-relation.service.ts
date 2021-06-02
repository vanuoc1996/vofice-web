import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerRelationServiceBase} from '../base/partner-relation.service.base';

@Injectable({providedIn: 'root'})
export class PartnerRelationService extends PartnerRelationServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
