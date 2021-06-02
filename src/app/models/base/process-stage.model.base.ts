import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProcessStage} from '../process-stage.model';

export class ProcessStageBase extends BaseModelImpl {
	stageId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	processId: number;
	stageType: string;
	stageNo: number;
	code: string;
	name: string;
	standalone: boolean;
	startWhen: string;
	assignTo: string;
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
		return this.stageId;
	}

	setPrimary( stageId: number = 0): void {
		this.stageId = stageId;
	}
}
