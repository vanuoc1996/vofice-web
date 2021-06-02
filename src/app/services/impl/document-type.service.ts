import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DocumentTypeServiceBase} from '../base/document-type.service.base';

@Injectable({providedIn: 'root'})
export class DocumentTypeService extends DocumentTypeServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
