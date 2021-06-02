import {BaseModelImpl} from '../../core/models/base-impl.model';
import {DomainEntry} from '../domain-entry.model';

export class DomainEntryBase extends BaseModelImpl {
	domainId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	parentId: number;
	leftId: number;
	rightId: number;
	lru: number;
	type: string;
	code: string;
	name: string;
	priority: number;
	main: boolean;
	hidden: boolean;
	multiple: boolean;
	settings: string;
	startDate: Date;
	endDate: Date;
	publishDate: Date;
	expireDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.domainId;
	}

	setPrimary( domainId: number = 0): void {
		this.domainId = domainId;
	}
}
