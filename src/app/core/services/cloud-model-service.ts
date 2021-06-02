import {Observable} from 'rxjs';

import {ServiceContext} from '../models/context';
import {BaseModel} from '../models/base.model';

export interface CloudModelService {
	count(serviceContext: ServiceContext): Observable<number>;

	search(serviceContext: ServiceContext): Observable<BaseModel[]>;

	// send a POST request to the API to create a new data object
	create(): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	get(primaryId: number): Observable<BaseModel>;

	getByPartition(primaryId: number, partitionDate: Date): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	getByUUID(uuid: string): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	getByUUIDPartition(uuid: string, partitionDate: Date): Observable<BaseModel>;
	
	// send a PUT request to the API to update a data object
	save(data: BaseModel): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	add(data: BaseModel): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	update(data: BaseModel): Observable<BaseModel>;

	// send a DELETE request to the API to delete a data object
	delete(data: BaseModel): Observable<BaseModel>;

	// send a PUT request to the API to update a data object
	saveBatch(data: BaseModel[]): Observable<BaseModel[]>;

	// send a PUT request to the API to update a data object
	addBatch(data: BaseModel[]): Observable<BaseModel[]>;

	// send a PUT request to the API to update a data object
	updateBatch(data: BaseModel[]): Observable<BaseModel[]>;

	// send a DELETE request to the API to delete a data object
	deleteBatch(data: BaseModel[]): Observable<BaseModel[]>;
}

export interface CloudTreeModelService extends CloudModelService {
	getChildren(parentId: number): Observable<BaseModel[]>;

	getChildrenByPartition(parentId: number, partitionDate: Date): Observable<BaseModel[]>;

	// send a PUT request to the API to update a data object
	getChildrenByUUID(uuid: string): Observable<BaseModel[]>;

	// send a PUT request to the API to update a data object
	getChildrenByUUIDPartition(uuid: string, partitionDate: Date): Observable<BaseModel[]>;
}
