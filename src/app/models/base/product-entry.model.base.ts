import {BaseModelImpl} from '../../core/models/base-impl.model';
import {ProductEntry} from '../product-entry.model';

export class ProductEntryBase extends BaseModelImpl {
	productId: number;
	groupId: number;
	companyId: number;
	userId: number;
	userName: string;
	createDate: Date;
	modifiedDate: Date;
	type: string;
	parentId: number;
	leftId: number;
	rightId: number;
	lru: number;
	code: string;
	name: string;
	sku: string;
	price: number;
	quantity: number;
	priority: number;
	startDate: Date;
	endDate: Date;
	expireDate: Date;
	description: string;
	status: number;
	deleted: boolean;
	syncDate: Date;


	constructor(){
		super();
	}

	getPrimary(): number {
		return this.productId;
	}

	setPrimary( productId: number = 0): void {
		this.productId = productId;
	}
}
