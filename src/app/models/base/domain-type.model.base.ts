import {BaseModelImpl} from '../../core/models/base-impl.model';
import {DomainType} from '../domain-type.model';

export class DomainTypeBase extends BaseModelImpl {
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
	hidden: boolean;
	hierarchy: boolean;
	dateRange: boolean;
	localizable: boolean;
	codeEnable: boolean;
	settings: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


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
