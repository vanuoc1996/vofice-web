import { Injectable, Injector } from '@angular/core';
import {PartnerBundleServiceBase} from './bundle-base/partner.service.base';

@Injectable({providedIn: 'root'})
export class PartnerBundleService extends PartnerBundleServiceBase {
	constructor(protected _injector: Injector) {
		super(_injector);
	}
}
