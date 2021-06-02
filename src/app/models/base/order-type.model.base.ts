import {BaseModelImpl} from '../../core/models/base-impl.model';
import {OrderType} from '../order-type.model';

export class OrderTypeBase extends BaseModelImpl {
	typeId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	type: string;
	code: string;
	name: string;
	description: string;
	settings: string;
	status: number;
	statusByUserId: number;
	statusByUserName: string;
	statusDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.typeId;
	}

	setPrimary( typeId: number = 0): void {
		this.typeId = typeId;
	}
}
