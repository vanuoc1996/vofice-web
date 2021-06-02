import {BaseModel} from './base.model';

export abstract class BaseModelImpl implements BaseModel{
	added = true;

	abstract getPrimary(): number;

	abstract setPrimary(primaryId: number);
}
