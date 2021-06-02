import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {DividerModule} from 'primeng/divider';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MenuModule} from 'primeng/menu';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DialogModule} from 'primeng/dialog';
import {RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {EditorModule} from 'primeng/editor';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {CheckboxModule} from 'primeng/checkbox';
import {InputNumberModule} from 'primeng/inputnumber';
import {DropdownModule} from 'primeng/dropdown';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TreeTableModule} from "primeng/treetable";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		TableModule,
		TreeTableModule,
		ButtonModule,
		CommonModule,
		FormsModule,
		TranslateModule,
		ReactiveFormsModule,
		SplitButtonModule,
		InputTextModule,
		CalendarModule,
		MultiSelectModule,
		DividerModule,
		ConfirmDialogModule,
		MenuModule,
		ToolbarModule,
		PanelModule,
		DividerModule,
		PanelMenuModule,
		InputTextareaModule,
		EditorModule,
		AutoCompleteModule,
		DropdownModule,
	],
	exports: [
		TableModule,
		TreeTableModule,
		ButtonModule,
		CommonModule,
		FormsModule,
		TranslateModule,
		ReactiveFormsModule,
		SplitButtonModule,
		InputTextModule,
		CalendarModule,
		MultiSelectModule,
		DividerModule,
		ConfirmDialogModule,
		MenuModule,
		ToolbarModule,
		PanelModule,
		DividerModule,
		PanelMenuModule,
		InputTextareaModule,
		DialogModule,
		RippleModule,
		SidebarModule,
		ContextMenuModule,
		TieredMenuModule,
		EditorModule,
		MessageModule,
		MessagesModule,
		CheckboxModule,
		InputNumberModule,
		AutoCompleteModule,
		DropdownModule,
	]
})
export class PrimeNGModule {
}
