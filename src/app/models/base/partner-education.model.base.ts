import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerEducation} from '../partner-education.model';
import {EducationType} from '../education-type.model';
import {OccupationType} from '../occupation-type.model';
import {GraduateType} from '../graduate-type.model';
import {PartnerEntry} from '../partner-entry.model';

export class PartnerEducationBase extends BaseModelImpl {
	educateId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	typeId: number;
	partnerId: number;
	educationId: number;
	occupationId: number;
	graduateId: number;
	graduateNo: string;
	graduateDate: Date;
	graduateScore: number;
	eduOrganizationId: number;
	eduName: string;
	startDate: Date;
	endDate: Date;
	issueDate: Date;
	expireDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;

	education: EducationType;
	occupation: OccupationType;
	graduate: GraduateType;
	educationOrganize: PartnerEntry;

	constructor(){
		super();
	}

	getPrimary(): number {
		return this.educateId;
	}

	setPrimary( educateId: number = 0): void {
		this.educateId = educateId;
	}
}
