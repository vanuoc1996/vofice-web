import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerLicenseServiceBase} from '../base/partner-license.service.base';

@Injectable({providedIn: 'root'})
export class PartnerLicenseService extends PartnerLicenseServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
