import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {DomainType} from '../../models/domain-type.model';
import {ServiceContext} from '../../core/models/context';
import {AbstractServiceBase} from '../../core/services/abstract-base-service.service';
import {CloudModelService} from '../../core/services/cloud-model-service';
import {CloudTreeModelService} from '../../core/services/cloud-model-service';

export class DomainTypeServiceBase extends AbstractServiceBase implements CloudModelService
{
	endpoint: string = this.hostname + '/domain-type-';

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

	search(serviceContext: ServiceContext): Observable<DomainType[]> {
		const options = {
			
		};

		if (!serviceContext.statementId) {
			serviceContext.statementId = 'textual';
		}

		return this.http.post<DomainType[]>(this.endpoint + 'search/', serviceContext, options);
	}


	// send a POST request to the API to create a new data object
	create(): Observable<DomainType> {
		return this.http.post<DomainType>(this.endpoint + 'create/', {});
	}

	// send a PUT request to the API to update a data object
	get(primaryId: number): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `get/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	getByPartition(primaryId: number, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `get/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	getByUUID(uuid: string): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `get-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	getByUUIDPartition(uuid: string, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `get-by-uuid/${uuid}`, {partitionDate});
	}


	// send a PUT request to the API to update a data object
	fetch(primaryId: number): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `fetch/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByPartition(primaryId: number, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `fetch/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	fetchByUUID(uuid: string): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `fetch-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByUUIDPartition(uuid: string, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `fetch-by-uuid/${uuid}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	find(primaryId: number): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `find/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	findByPartition(primaryId: number, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `find/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	findByUUID(uuid: string): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `find-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	findByUUIDPartition(uuid: string, partitionDate: Date): Observable<DomainType>
	{
		return this.http.post<DomainType>(this.endpoint + `find-by-uuid/${uuid}`, {partitionDate});
	}
		
	// send a PUT request to the API to update a data object
	add(data: DomainType): Observable<DomainType> {
		const options = {         
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType>(this.endpoint + 'add/', data, options);
	}

	// send a PUT request to the API to update a data object
	update(data: DomainType): Observable<DomainType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType>(this.endpoint + 'update/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	delete(data: DomainType): Observable<DomainType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType>(this.endpoint + 'delete/', data, options);
	}

	save(data: DomainType): Observable<DomainType> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType>(this.endpoint + 'save/', data, options);
	}
		
	// send a PUT request to the API to update a data object
	addBatch(data: DomainType[]): Observable<DomainType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType[]>(this.endpoint + 'add-batch/', data, options);
	}

	// send a PUT request to the API to update a data object
	updateBatch(data: DomainType[]): Observable<DomainType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType[]>(this.endpoint + 'update-batch/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	deleteBatch(data: DomainType[]): Observable<DomainType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType[]>(this.endpoint + 'delete-batch/', data, options);
	}

	saveBatch(data: DomainType[]): Observable<DomainType[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<DomainType[]>(this.endpoint + 'save-batch/', data, options);
	}
}
