import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddressTypeServiceBase} from '../base/address-type.service.base';

@Injectable({providedIn: 'root'})
export class AddressTypeService extends AddressTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
