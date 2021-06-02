import {ChangeDetectorRef, Component, ElementRef, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ServiceContext} from '../models/context';
import {ConfirmationService, MenuItem, Message, MessageService} from 'primeng/api';
import {ActivatedRoute, Router} from '@angular/router';
import {getURL} from '../../app.module';
import {TranslateService} from '@ngx-translate/core';

@Component({
	selector: 'app-widget-base',
	template: ``
})
export class WidgetBaseComponent implements OnInit {
	@Input()
	legend;
	@Input()
	breadcrumb: MenuItem[];
	@Input()
	backRoute: string;
	@Input()
	visible = false;
	@Input()
	disable = false;
	@Input()
	settings: any = {};

	messages: Message[];
	serviceContext: ServiceContext;
	loading = true;
	debugMode = true;

	constructor(
		public widgetConfig: any,
		protected http: HttpClient,
		protected router: Router,
		protected activatedRoute: ActivatedRoute,
		protected cdRef: ChangeDetectorRef,
		protected translateService: TranslateService,
		protected confirmService: ConfirmationService,
		protected messageService: MessageService) {
	}

	ngOnInit() {
		if (!this.backRoute) {
			this.backRoute = this.activatedRoute.snapshot.queryParamMap.get('backRoute');
		}
		if (this.serviceContext === undefined) {
			this.serviceContext = new ServiceContext();
		}

		this.buildLayout();
	}

	getCurrentURL(): string {
		return getURL(this.router);
	}

	buildLayout(): void {
	}

	showConfirm(dialogKey: string, dialogHeader, content: string): boolean {
		let answer;

		this.confirmService.confirm({
				message: content,
				header: dialogHeader,
				key: dialogKey,
				icon: 'pi pi-exclamation-triangle',
				accept: () => {
					answer = true;
				},
				reject: () => {
					answer = false;
				}
			}
		);

		return answer;
	}

	showSuccessful(content: any): void {
		this.confirmService.confirm({
				message: content,
				header: 'Successful',
				key: 'success',
				icon: 'pi pi-exclamation-triangle'
			}
		);

		this.showMessage('success', 'Successful', content);
	}

	showError(dialogKey: string, dialogHeader: string, error: any): void {
		console.log(error);

		this.confirmService.confirm({
				message: error,
				header: dialogHeader,
				key: dialogKey,
				icon: 'pi pi-exclamation-triangle'
			}
		);

		this.showMessage('error', 'error', error);
	}

	showMessage(msgSeverity: string, msgSummary: string, content: string): void {
		this.messageService.add({severity: msgSeverity, summary: msgSummary, detail: content});
	}

	getStatusOptions(): any {
		return [
			{label: 'Progress', value: '1'},
			{label: 'Complete', value: '2'},
			{label: 'Postpone', value: '3'},
			{label: 'Due date', value: '4'},
			{label: 'Over date', value: '5'},
			{label: 'Expired date', value: '6'}
		];
	}
}
