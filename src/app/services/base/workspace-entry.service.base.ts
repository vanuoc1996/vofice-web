import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {WorkspaceEntry} from '../../models/workspace-entry.model';
import {ServiceContext} from '../../core/models/context';
import {AbstractServiceBase} from '../../core/services/abstract-base-service.service';
import {CloudModelService} from '../../core/services/cloud-model-service';
import {CloudTreeModelService} from '../../core/services/cloud-model-service';

export class WorkspaceEntryServiceBase extends AbstractServiceBase implements CloudModelService, CloudTreeModelService
{
	endpoint: string = this.hostname + '/workspace-';

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


		return this.http.post<number>(this.endpoint + 'count/', serviceContext, options);
	}

	search(serviceContext: ServiceContext): Observable<WorkspaceEntry[]> {
		const options = {
			
		};


		return this.http.post<WorkspaceEntry[]>(this.endpoint + 'search/', serviceContext, options);
	}

	getChildren(parentId: number): Observable<WorkspaceEntry[]> {
		return this.http.post<WorkspaceEntry[]>(this.endpoint + `get-children/${parentId}`, {});
	}

	getChildrenByPartition(parentId: number, partitionDate: Date): Observable<WorkspaceEntry[]> {
		return this.http.post<WorkspaceEntry[]>(this.endpoint + `get-children/${parentId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	getChildrenByUUID(uuid: string): Observable<WorkspaceEntry[]> {
		return this.http.post<WorkspaceEntry[]>(this.endpoint + `get-children-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	getChildrenByUUIDPartition(uuid: string, partitionDate: Date): Observable<WorkspaceEntry[]> {
		return this.http.post<WorkspaceEntry[]>(this.endpoint + `get-children-by-uuid/${uuid}`, {partitionDate});
	}

	// send a POST request to the API to create a new data object
	create(): Observable<WorkspaceEntry> {
		return this.http.post<WorkspaceEntry>(this.endpoint + 'create/', {});
	}

	// send a PUT request to the API to update a data object
	get(primaryId: number): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `get/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	getByPartition(primaryId: number, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `get/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	getByUUID(uuid: string): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `get-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	getByUUIDPartition(uuid: string, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `get-by-uuid/${uuid}`, {partitionDate});
	}


	// send a PUT request to the API to update a data object
	fetch(primaryId: number): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `fetch/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByPartition(primaryId: number, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `fetch/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	fetchByUUID(uuid: string): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `fetch-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	fetchByUUIDPartition(uuid: string, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `fetch-by-uuid/${uuid}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	find(primaryId: number): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `find/${primaryId}`, {});
	}

	// send a PUT request to the API to update a data object
	findByPartition(primaryId: number, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `find/${primaryId}`, {partitionDate});
	}

	// send a PUT request to the API to update a data object
	findByUUID(uuid: string): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `find-by-uuid/${uuid}`, {});
	}

	// send a PUT request to the API to update a data object
	findByUUIDPartition(uuid: string, partitionDate: Date): Observable<WorkspaceEntry>
	{
		return this.http.post<WorkspaceEntry>(this.endpoint + `find-by-uuid/${uuid}`, {partitionDate});
	}
		
	// send a PUT request to the API to update a data object
	add(data: WorkspaceEntry): Observable<WorkspaceEntry> {
		const options = {         
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry>(this.endpoint + 'add/', data, options);
	}

	// send a PUT request to the API to update a data object
	update(data: WorkspaceEntry): Observable<WorkspaceEntry> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry>(this.endpoint + 'update/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	delete(data: WorkspaceEntry): Observable<WorkspaceEntry> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry>(this.endpoint + 'delete/', data, options);
	}

	save(data: WorkspaceEntry): Observable<WorkspaceEntry> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry>(this.endpoint + 'save/', data, options);
	}
		
	// send a PUT request to the API to update a data object
	addBatch(data: WorkspaceEntry[]): Observable<WorkspaceEntry[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry[]>(this.endpoint + 'add-batch/', data, options);
	}

	// send a PUT request to the API to update a data object
	updateBatch(data: WorkspaceEntry[]): Observable<WorkspaceEntry[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry[]>(this.endpoint + 'update-batch/', data, options);
	}

	// send a DELETE request to the API to delete a data object
	deleteBatch(data: WorkspaceEntry[]): Observable<WorkspaceEntry[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry[]>(this.endpoint + 'delete-batch/', data, options);
	}

	saveBatch(data: WorkspaceEntry[]): Observable<WorkspaceEntry[]> {
		const options = {
			params: {
				retrieve: 'true'
			}
		};

		return this.http.post<WorkspaceEntry[]>(this.endpoint + 'save-batch/', data, options);
	}
}
