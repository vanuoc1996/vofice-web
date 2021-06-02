import { Injectable, Injector } from '@angular/core';
import {WorkspaceBundleServiceBase} from './bundle-base/workspace.service.base';

@Injectable({providedIn: 'root'})
export class WorkspaceBundleService extends WorkspaceBundleServiceBase {
	constructor(protected _injector: Injector) {
		super(_injector);
	}
}
