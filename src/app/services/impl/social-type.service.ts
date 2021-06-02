import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SocialTypeServiceBase} from '../base/social-type.service.base';

@Injectable({providedIn: 'root'})
export class SocialTypeService extends SocialTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
