import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerEducationServiceBase} from '../base/partner-education.service.base';

@Injectable({providedIn: 'root'})
export class PartnerEducationService extends PartnerEducationServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
