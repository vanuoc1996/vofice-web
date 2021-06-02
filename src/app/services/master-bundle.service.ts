import { Injectable, Injector } from '@angular/core';
import {MasterBundleServiceBase} from './bundle-base/master.service.base';

@Injectable({providedIn: 'root'})
export class MasterBundleService extends MasterBundleServiceBase {
	constructor(protected _injector: Injector) {
		super(_injector);
	}
}
