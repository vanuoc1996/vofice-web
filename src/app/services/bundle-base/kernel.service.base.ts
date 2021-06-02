import {Injector } from '@angular/core';
import {AbstractBundleService} from '../core/services/abstract-bundle-service';
import {OrderTypeService} from './impl/order-type.service';
import {ProcessActivityService} from './impl/process-activity.service';
import {ProcessChecklistService} from './impl/process-checklist.service';
import {ProcessEntryService} from './impl/process-entry.service';
import {ProcessOrderService} from './impl/process-order.service';
import {ProcessStageService} from './impl/process-stage.service';

export class KernelBundleServiceBase extends BundleServiceAbstract {
	protected _orderTypeService: OrderTypeService;
	protected _processActivityService: ProcessActivityService;
	protected _processChecklistService: ProcessChecklistService;
	protected _processService: ProcessEntryService;
	protected _processOrderService: ProcessOrderService;
	protected _processStageService: ProcessStageService;

	constructor(protected injector: Injector) {
		super(injector);
	}

	get orderTypeService(): OrderTypeService {
		if (!this._orderTypeService) {
			this._orderTypeService = this.injector.get(OrderTypeService);
		}
		return this._orderTypeService;
	}
	get processActivityService(): ProcessActivityService {
		if (!this._processActivityService) {
			this._processActivityService = this.injector.get(ProcessActivityService);
		}
		return this._processActivityService;
	}
	get processChecklistService(): ProcessChecklistService {
		if (!this._processChecklistService) {
			this._processChecklistService = this.injector.get(ProcessChecklistService);
		}
		return this._processChecklistService;
	}
	get processService(): ProcessEntryService {
		if (!this._processService) {
			this._processService = this.injector.get(ProcessEntryService);
		}
		return this._processService;
	}
	get processOrderService(): ProcessOrderService {
		if (!this._processOrderService) {
			this._processOrderService = this.injector.get(ProcessOrderService);
		}
		return this._processOrderService;
	}
	get processStageService(): ProcessStageService {
		if (!this._processStageService) {
			this._processStageService = this.injector.get(ProcessStageService);
		}
		return this._processStageService;
	}
}
