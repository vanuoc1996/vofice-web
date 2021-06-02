import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerRelation} from '../partner-relation.model';

export class PartnerRelationBase extends BaseModelImpl {
	relationId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	partnerId: number;
	personId: number;
	relationTypeId: number;
	dependence: boolean;
	marriedDate: Date;
	startDate: Date;
	endDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.relationId;
	}

	setPrimary( relationId: number = 0): void {
		this.relationId = relationId;
	}
}
