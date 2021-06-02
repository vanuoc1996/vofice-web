import {BaseModelImpl} from '../../core/models/base-impl.model';
import {PartnerEntry} from '../partner-entry.model';
import {DepartmentType} from '../department-type.model';
import {DimensionType} from '../dimension-type.model';
import {IndustryType} from '../industry-type.model';
import {NationalType} from '../national-type.model';
import {ReligionType} from '../religion-type.model';
import {EducationType} from '../education-type.model';
import {OccupationType} from '../occupation-type.model';
import {PositionType} from '../position-type.model';
import {ContactEmail} from '../contact-email.model';
import {ContactPhone} from '../contact-phone.model';
import {ContactAddress} from '../contact-address.model';
import {ContactBank} from '../contact-bank.model';
import {PartnerExperience} from '../partner-experience.model';
import {PartnerEducation} from '../partner-education.model';
import {PartnerRelation} from '../partner-relation.model';
import {PartnerLicense} from '../partner-license.model';
import {PartnerHobby} from '../partner-hobby.model';

export class PartnerEntryBase extends BaseModelImpl {
	partnerId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	parentId: number;
	rightId: number;
	lru: number;
	typeId: number;
	departmentTypeId: string;
	code: string;
	name: string;
	tradeName: string;
	nickName: string;
	homeland: string;
	portraitId: number;
	gender: number;
	marital: number;
	birthday: Date;
	individual: boolean;
	organizationId: number;
	scaleTypeId: number;
	industryId: number;
	jobTitle: string;
	erpCode: string;
	contractNo: string;
	contractDate: Date;
	bankId: number;
	bankOffice: string;
	bankAccount: string;
	taxId: string;
	nationalId: number;
	religionId: number;
	educationId: number;
	occupationId: number;
	positionId: number;
	loginUserId: number;
	emailId: number;
	phonebookId: number;
	contactId: number;
	billingId: number;
	residentId: number;
	populationId: number;
	coverImage: boolean;
	coverImageFileEntryId: number;
	coverImageId: number;
	coverImageURL: string;
	smallImage: boolean;
	smallImageFileEntryId: number;
	smallImageId: number;
	smallImageURL: string;
	startDate: Date;
	endDate: Date;
	publishDate: Date;
	expireDate: Date;
	termDate: Date;
	activeDate: Date;
	extendDate: Date;
	cancelDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;

	departmentType: DepartmentType;
	scaleType: DimensionType;
	industryType: IndustryType;
	bank: PartnerEntry;
	national: NationalType;
	religion: ReligionType;
	education: EducationType;
	occupation: OccupationType;
	position: PositionType;
	contactEmail: ContactEmail;
	contactPhone: ContactPhone;
	contactAddress: ContactAddress;
	contactBilling: ContactAddress;
	contactResident: ContactAddress;
	phonebooks: ContactPhone[];
	emails: ContactEmail[];
	addresses: ContactAddress[];
	banks: ContactBank[];
	experiences: PartnerExperience[];
	educations: PartnerEducation[];
	relations: PartnerRelation[];
	licenses: PartnerLicense[];
	hobbies: PartnerHobby[];

	constructor(){
		super();
	}

	getPrimary(): number {
		return this.partnerId;
	}

	setPrimary( partnerId: number = 0): void {
		this.partnerId = partnerId;
	}
}
