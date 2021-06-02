import {Injector } from '@angular/core';
import {AbstractBundleService} from '../core/services/abstract-bundle-service';
import {WorkspaceApprovalService} from './impl/workspace-approval.service';
import {WorkspaceAttachmentService} from './impl/workspace-attachment.service';
import {WorkspaceCommentService} from './impl/workspace-comment.service';
import {WorkspaceEntryService} from './impl/workspace-entry.service';
import {WorkspaceMemberService} from './impl/workspace-member.service';

export class WorkspaceBundleServiceBase extends BundleServiceAbstract {
	protected _workspaceApprovalService: WorkspaceApprovalService;
	protected _workspaceAttachmentService: WorkspaceAttachmentService;
	protected _workspaceCommentService: WorkspaceCommentService;
	protected _workspaceService: WorkspaceEntryService;
	protected _workspaceMemberService: WorkspaceMemberService;

	constructor(protected injector: Injector) {
		super(injector);
	}

	get workspaceApprovalService(): WorkspaceApprovalService {
		if (!this._workspaceApprovalService) {
			this._workspaceApprovalService = this.injector.get(WorkspaceApprovalService);
		}
		return this._workspaceApprovalService;
	}
	get workspaceAttachmentService(): WorkspaceAttachmentService {
		if (!this._workspaceAttachmentService) {
			this._workspaceAttachmentService = this.injector.get(WorkspaceAttachmentService);
		}
		return this._workspaceAttachmentService;
	}
	get workspaceCommentService(): WorkspaceCommentService {
		if (!this._workspaceCommentService) {
			this._workspaceCommentService = this.injector.get(WorkspaceCommentService);
		}
		return this._workspaceCommentService;
	}
	get workspaceService(): WorkspaceEntryService {
		if (!this._workspaceService) {
			this._workspaceService = this.injector.get(WorkspaceEntryService);
		}
		return this._workspaceService;
	}
	get workspaceMemberService(): WorkspaceMemberService {
		if (!this._workspaceMemberService) {
			this._workspaceMemberService = this.injector.get(WorkspaceMemberService);
		}
		return this._workspaceMemberService;
	}
}
