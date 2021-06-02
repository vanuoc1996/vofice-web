import {plainToClass} from 'class-transformer';
import {ProductEntryBase} from './base/product-entry.model.base';

export class ProductEntry extends ProductEntryBase
{
	constructor()
	{
		super();
	}

	clone(): ProductEntry {
		return plainToClass(ProductEntry, this);
	}
}
