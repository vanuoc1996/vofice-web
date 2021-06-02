import { Injectable, Injector } from '@angular/core';
import {KernelBundleServiceBase} from './bundle-base/kernel.service.base';

@Injectable({providedIn: 'root'})
export class KernelBundleService extends KernelBundleServiceBase {
	constructor(protected _injector: Injector) {
		super(_injector);
	}
}
