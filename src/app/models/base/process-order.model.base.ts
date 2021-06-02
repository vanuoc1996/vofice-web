import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProcessOrder} from '../process-order.model';

export class ProcessOrderBase extends BaseModelImpl {
	orderId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	processId: number;
	stageId: number;
	orderTypeId: number;
	name: string;
	startWhen: string;
	assignTo: string;
	duration: number;
	timeUnit: string;
	standalone: boolean;
	settings: string;
	description: string;
	status: number;
	statusByUserId: number;
	statusByUserName: string;
	statusDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.orderId;
	}

	setPrimary( orderId: number = 0): void {
		this.orderId = orderId;
	}
}
