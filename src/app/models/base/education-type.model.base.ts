import {BaseModelImpl} from '../../core/models/base-impl.model';
import {EducationType} from '../education-type.model';

export class EducationTypeBase extends BaseModelImpl {
	typeId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	uuid: string;
	code: string;
	name: string;
	main: boolean;
	priority: number;
	description: string;
	referenceCode: string;
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
