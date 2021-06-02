import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProcessStageServiceBase} from '../base/process-stage.service.base';

@Injectable({providedIn: 'root'})
export class ProcessStageService extends ProcessStageServiceBase {
	constructor(protected http: HttpClient) {
		super(http);
	}
}
