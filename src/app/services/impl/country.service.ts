import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryServiceBase} from '../base/country.service.base';

@Injectable({providedIn: 'root'})
export class CountryService extends CountryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
