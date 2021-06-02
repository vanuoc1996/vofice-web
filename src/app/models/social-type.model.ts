import {plainToClass} from 'class-transformer';
import {SocialTypeBase} from './base/social-type.model.base';

export class SocialType extends SocialTypeBase
{
	constructor()
	{
		super();
	}

	clone(): SocialType {
		return plainToClass(SocialType, this);
	}
}
