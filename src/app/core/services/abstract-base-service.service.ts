import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment as env} from '../../../environments/environment';

export abstract class AbstractServiceBase {
	hostname = env['baseEndpoint'];
	protected httpHeaders: HttpHeaders;

	protected constructor(protected http: HttpClient) {
		this.httpHeaders = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
			Allow: 'GET, POST, OPTIONS, PUT, DELETE'
		});
	}
}
