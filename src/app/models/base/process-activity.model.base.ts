import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProcessActivity} from '../process-activity.model';

export class ProcessActivityBase extends BaseModelImpl {
	activityId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	processId: number;
	stageId: number;
	orderId: number;
	activity: string;
	nextProcessId: number;
	nextStageId: number;
	nextOrderTypeId: number;
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
		return this.activityId;
	}

	setPrimary( activityId: number = 0): void {
		this.activityId = activityId;
	}
}
