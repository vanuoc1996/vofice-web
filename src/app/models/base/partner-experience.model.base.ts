import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerExperience} from '../partner-experience.model';

export class PartnerExperienceBase extends BaseModelImpl {
	experienceId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	partnerId: number;
	organizationId: number;
	organizationTypeId: number;
	organizationSizeId: number;
	companyName: string;
	occupationId: number;
	positionId: number;
	reasonId: number;
	jobTitle: string;
	totalIncome: number;
	baseIncome: number;
	insurance: number;
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
		return this.experienceId;
	}

	setPrimary( experienceId: number = 0): void {
		this.experienceId = experienceId;
	}
}
