import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {SocialType} from '../../models/social-type.model';
import {ServiceContext} from '../../core/models/context';
import {AbstractServiceBase} from '../../core/services/abstract-base-service.service';
import {CloudModelService} from '../../core/services/cloud-model-service';
import {CloudTreeModelService} from '../../core/services/cloud-model-service';

export class SocialTypeServiceBase extends AbstractServiceBase implements CloudModelService
{
	endpoint: string = this.hostname + '/social-type-';

	constructor(protected http: HttpClient) {
		super(http);
	}

	// NOTE: all API calls in this file use simple endpoints served by
	// an Express app in the file app.js in the repo root. See that file
	// for all back-end code.

	// Uses http.get() to load data from a single API endpoint
	count(serviceContext: ServiceContext): Observable<number> {
		const options = {
			
		};

		if (!serviceContext.statementId) {
			serviceContext.statementId = 'textual';
		}

		return this.http.post<number>(this.endpoint + 'count/', serviceContext, options);
	}

	search(serviceContext: ServiceContext): Observable<SocialType[]> {
		const options = {
			
		};

		if (!serviceContext.statementId) {
			serviceContext.statementId = 'textual';
		}

		return this.http.post<SocialType[]>(this.endpoint + 'search/', serviceContext, options);
	}


	// send a POST request to the API to create a new data object
	create(): Observable<SocialType> {
		return this.http.post<SocialType>(this.endpoint + 'create/', {});
	}

	// send a PUT request to the API to update a data object
	get(primaryId: number): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `get/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	getByPartition(primaryId: number, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `get/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	getByUUID(uuid: string): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `get-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	getByUUIDPartition(uuid: string, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `get-by-uuid/${uuid}`, {partitionDate});
	}


	// send a PUT request to the API to update a data object
	fetch(primaryId: number): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `fetch/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByPartition(primaryId: number, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `fetch/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	fetchByUUID(uuid: string): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `fetch-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByUUIDPartition(uuid: string, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `fetch-by-uuid/${uuid}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	find(primaryId: number): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `find/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	findByPartition(primaryId: number, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `find/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	findByUUID(uuid: string): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `find-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	findByUUIDPartition(uuid: string, partitionDate: Date): Observable<SocialType>
	{
		return this.http.post<SocialType>(this.endpoint + `find-by-uuid/${uuid}`, {partitionDate});
	}
		
	// send a PUT request to the API to update a data object
	add(data: SocialType): Observable<SocialType> {
		const options = {         
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType>(this.endpoint + 'add/', data, options);
	}

	// send a PUT request to the API to update a data object
	update(data: SocialType): Observable<SocialType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType>(this.endpoint + 'update/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	delete(data: SocialType): Observable<SocialType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType>(this.endpoint + 'delete/', data, options);
	}

	save(data: SocialType): Observable<SocialType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType>(this.endpoint + 'save/', data, options);
	}
		
	// send a PUT request to the API to update a data object
	addBatch(data: SocialType[]): Observable<SocialType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType[]>(this.endpoint + 'add-batch/', data, options);
	}

	// send a PUT request to the API to update a data object
	updateBatch(data: SocialType[]): Observable<SocialType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType[]>(this.endpoint + 'update-batch/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	deleteBatch(data: SocialType[]): Observable<SocialType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType[]>(this.endpoint + 'delete-batch/', data, options);
	}

	saveBatch(data: SocialType[]): Observable<SocialType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<SocialType[]>(this.endpoint + 'save-batch/', data, options);
	}
}
