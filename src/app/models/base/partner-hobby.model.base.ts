import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerHobby} from '../partner-hobby.model';

export class PartnerHobbyBase extends BaseModelImpl {
	hobbyId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	partnerId: number;
	typeId: number;
	skillId: number;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.hobbyId;
	}

	setPrimary( hobbyId: number = 0): void {
		this.hobbyId = hobbyId;
	}
}
