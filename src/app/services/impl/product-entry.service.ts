import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductEntryServiceBase} from '../base/product-entry.service.base';

@Injectable({providedIn: 'root'})
export class ProductEntryService extends ProductEntryServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
