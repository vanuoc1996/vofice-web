import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LicenseTypeServiceBase} from '../base/license-type.service.base';

@Injectable({providedIn: 'root'})
export class LicenseTypeService extends LicenseTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
