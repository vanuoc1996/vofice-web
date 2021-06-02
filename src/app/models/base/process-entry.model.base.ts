import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProcessEntry} from '../process-entry.model';

export class ProcessEntryBase extends BaseModelImpl {
	processId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	version: number;
	type: string;
	code: string;
	name: string;
	settings: string;
	startDate: Date;
	endDate: Date;
	description: string;
	status: number;
	statusByUserId: number;
	statusByUserName: string;
	statusDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.processId;
	}

	setPrimary( processId: number = 0): void {
		this.processId = processId;
	}
}
