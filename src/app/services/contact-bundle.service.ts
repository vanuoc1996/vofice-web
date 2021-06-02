import { Injectable, Injector } from '@angular/core';
import {ContactBundleServiceBase} from './bundle-base/contact.service.base';

@Injectable({providedIn: 'root'})
export class ContactBundleService extends ContactBundleServiceBase {
	constructor(protected _injector: Injector) {
		super(_injector);
	}
}
