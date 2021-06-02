import {plainToClass} from 'class-transformer';
import {DepartmentTypeBase} from './base/department-type.model.base';

export class DepartmentType extends DepartmentTypeBase
{
	constructor()
	{
		super();
	}

	clone(): DepartmentType {
		return plainToClass(DepartmentType, this);
	}
}
