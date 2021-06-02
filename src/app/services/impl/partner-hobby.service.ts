import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerHobbyServiceBase} from '../base/partner-hobby.service.base';

@Injectable({providedIn: 'root'})
export class PartnerHobbyService extends PartnerHobbyServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
