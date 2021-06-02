import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PartnerEntryServiceBase} from '../base/partner-entry.service.base';

@Injectable({providedIn: 'root'})
export class PartnerEntryService extends PartnerEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
