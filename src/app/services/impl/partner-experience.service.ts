import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerExperienceServiceBase} from '../base/partner-experience.service.base';

@Injectable({providedIn: 'root'})
export class PartnerExperienceService extends PartnerExperienceServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
