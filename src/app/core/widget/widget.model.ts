// export layout related constants

export const ACTION_CMD_ADD = 'add';
export const ACTION_CMD_EDIT = 'edit';
export const ACTION_CMD_UPDATE = 'update';
export const ACTION_CMD_DELETE = 'delete';
export const ACTION_CMD_CANCEL = 'cancel';
export const ACTION_CMD_REFRESH = 'refresh';
export const EDIT_MODE_DIRECT = 'direct';
export const EDIT_MODE_RELOAD = 'reload';
export const EDIT_MODE_BATCH = 'batch';

export interface WidgetControl {
	code?: string;
	label?: string;
	icon?: string;
	field?: string;
	placeholder?: string;
	inputType?: string;
	inputMask?: string;
	visible?: boolean;
	disabled?: boolean;
	selected?: boolean;
	datetime?: boolean;
	initialise?: boolean;
	initValue?: any;
	inputValue?: any;
	options?: any;
	route?: any;
	routeParams?: any;
	sortType?: string;
	sortable?: boolean;
	custom?: boolean;
}

export interface WidgetOrder {
	code?: string;
	label?: string;
	icon?: string;
	statementId?: string;
	visible?: boolean;
	disabled?: boolean;
	selected?: boolean;
	custom?: boolean;
}

export interface WidgetFinder {
	code?: string;
	label?: string;
	icon?: string;
	statementId?: string;
	visible?: boolean;
	disabled?: boolean;
	selected?: boolean;
	initialise?: boolean;
	route?: any;
	routeParams?: any;
	custom?: boolean;
	columns?: WidgetControl[];
}

export interface WidgetEditConfig {
	legend?: string;
	primaryKeyName?: string;
	parentKeyName?: string;
	partitionKeyName?: string;
	partitionParentKeyName?: string;
	statementId?: string;
	controls?: WidgetControl[];
}

export interface WidgetSelectConfig {
	primaryKeyName?: string;
	partitionKeyName?: string;
	labelName?: string;
	defaultLabel?: string;
	statementId?: string;
	enableNull?: boolean;
	enableFilter?: boolean;
	multiple?: boolean;
}

export interface WidgetAutoCompleteConfig extends WidgetSelectConfig {
}

export interface WidgetTableConfig {
	legend?: string;
	primaryKeyName?: string;
	parentKeyName?: string;
	partitionKeyName?: string;
	statementId?: string;
	editPosition?: string;
	enableToolbar?: boolean;
	enableRowCheck?: boolean;
	enableFacet?: boolean;
	enableFilter?: boolean;
	enableAdd?: boolean;
	enableEdit?: boolean;
	enableDelete?: boolean;
	enableExport?: boolean;
	finders?: WidgetFinder[];
	orders?: WidgetOrder[];
	searchControls?: WidgetControl[];
	toggleControls?: WidgetControl[];
}

export interface WidgetTreeConfig extends WidgetTableConfig{
	legend?: string;
	parentKey?: string;
	expandedIcon?: string;
	collapsedIcon?: string;
}

export interface WidgetTableLOVConfig extends WidgetTableConfig{
}
