import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerTypeServiceBase} from '../base/partner-type.service.base';

@Injectable({providedIn: 'root'})
export class PartnerTypeService extends PartnerTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
