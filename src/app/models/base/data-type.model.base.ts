import {BaseModelImpl} from '../../core/models/base-impl.model';
import {DataType} from '../data-type.model';

export class DataTypeBase extends BaseModelImpl {
	typeId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	resourceName: string;
	resourceId: number;
	type: string;
	code: string;
	name: string;
	inputLabel: string;
	inputType: string;
	inputMask: string;
	inputDomain: string;
	inputHint: string;
	minLength: number;
	maxLength: number;
	minValue: number;
	maxValue: number;
	minScore: number;
	maxScore: number;
	newValue: string;
	options: string;
	score: string;
	unit: string;
	priority: number;
	required: boolean;
	readOnly: boolean;
	showLabel: boolean;
	localizable: boolean;
	repeatable: boolean;
	multiple: boolean;
	description: string;
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
