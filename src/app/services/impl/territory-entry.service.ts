import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TerritoryEntryServiceBase} from '../base/territory-entry.service.base';

@Injectable({providedIn: 'root'})
export class TerritoryEntryService extends TerritoryEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
