import {plainToClass} from 'class-transformer';
import {DocumentTypeBase} from './base/document-type.model.base';

export class DocumentType extends DocumentTypeBase
{
	constructor()
	{
		super();
	}

	clone(): DocumentType {
		return plainToClass(DocumentType, this);
	}
}
