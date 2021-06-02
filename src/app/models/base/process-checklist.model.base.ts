import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProcessChecklist} from '../process-checklist.model';

export class ProcessChecklistBase extends BaseModelImpl {
	checklistId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	processId: number;
	stageId: number;
	orderId: number;
	name: string;
	checked: boolean;
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
		return this.checklistId;
	}

	setPrimary( checklistId: number = 0): void {
		this.checklistId = checklistId;
	}
}
