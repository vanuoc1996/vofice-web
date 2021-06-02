import {BaseModelImpl} from '../../core/models/base-impl.model';
import {MeasureEntry} from '../measure-entry.model';

export class MeasureEntryBase extends BaseModelImpl {
	measureId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	code: string;
	name: string;
	main: boolean;
	localSymbol: string;
	interSymbol: string;
	priority: number;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.measureId;
	}

	setPrimary( measureId: number = 0): void {
		this.measureId = measureId;
	}
}
