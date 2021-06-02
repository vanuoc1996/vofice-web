import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MeasureEntryServiceBase} from '../base/measure-entry.service.base';

@Injectable({providedIn: 'root'})
export class MeasureEntryService extends MeasureEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
