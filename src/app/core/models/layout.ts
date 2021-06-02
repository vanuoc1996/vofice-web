import {plainToClass} from 'class-transformer';

export class LayoutElement {
	code: string;
	label: string;
	icon: string;
	width: string;
	style: string;
	action: string;
	route: string;
	disabled: boolean;
	visible: boolean;
	selected: boolean;
	initValue: any;
	inputValue: any;
	options: any;
	routeParams: any;

	constructor() {
	}

	copy(object: LayoutElement): LayoutElement {
		object.code = this.code;
		object.label = this.label;
		object.icon = this.icon;
		object.width = this.width;
		object.style = this.style;
		object.action = this.action;
		object.route = this.route;
		object.visible = this.visible;
		object.selected = this.selected;
		object.initValue = this.initValue;
		object.inputValue = this.inputValue;
		object.options = this.options;

		return object;
	}
}

export class LayoutColumn extends LayoutElement {
	field: string;
	inputType: string;
	inputMask: string;
	placeholder: string;
	sortType: string;
	datetime: boolean;
	sortable: boolean;
	custom: boolean;

	constructor() {
		super();
	}

	clone(): LayoutColumn {
		return plainToClass(LayoutColumn, this);
	}
}

export class LayoutColumns extends LayoutElement {
	columns: LayoutColumn[] = [];

	constructor() {
		super();
	}

	clone(): LayoutColumns {
		return plainToClass(LayoutColumns, this);
	}

	get length(): number {
		return this.columns ? this.columns.length : 0;
	}

	addColumn(code: string, label: string): LayoutColumn {
		let item = this.getColumn(code);

		if (item == null) {
			item = new LayoutColumn();

			item.code = code;
			item.field = code;
			item.label = label;

			this.columns.push(item);
		} else {
			item.label = label;
		}

		return item;
	}

	copyColumn(code: string, newCode: string): LayoutColumn {
		const oldItem: LayoutColumn = this.getColumn(code);
		const newItem: LayoutColumn = oldItem.clone();

		newItem.code = newCode;

		return this.setColumn(newItem);
	}

	getIndex(code: string): number {
		return this.columns.findIndex(item => (item.code === code));
	}

	getColumn(code: string): LayoutColumn {
		const index = this.getIndex(code);

		return (index < 0) ? null : this.columns[index];
	}

	setColumn(column: LayoutColumn): LayoutColumn {
		const index = this.columns.findIndex(item => (item.code === column.code));

		if (index < 0) {
			this.columns.push(column);
		} else {
			this.columns[index] = column;
		}

		return column;
	}

	updateInitValue(code: string, value: any): void {
		const index = this.columns.findIndex(item => (item.code === code));

		if (index < 0) {
		} else {
			this.columns[index].initValue = value;
		}
	}

	updateInputValue(code: string, value: any): void {
		const index = this.columns.findIndex(item => (item.code === code));

		if (index < 0) {
		} else {
			this.columns[index].inputValue = value;
		}
	}
}

export class LayoutOrder extends LayoutColumns {
	constructor() {
		super();
	}

	clone(): LayoutOrder {
		return this.copy(new LayoutOrder()) as LayoutOrder;
	}
}

export class LayoutFinder extends LayoutColumns {

	statementId: string;
	manual: boolean;

	constructor() {
		super();
	}

	clone(): LayoutFinder {
		return this.copy(new LayoutFinder()) as LayoutFinder;
	}
}

export class Layout extends LayoutElement {
	showSearchPanel: boolean;
	enableToolbar: boolean;
	enableRowCheck: boolean;
	actionColumns: LayoutColumns = new LayoutColumns();
	tableColumns: LayoutColumns = new LayoutColumns();
	searchColumns: LayoutColumns = new LayoutColumns();
	orderColumns: LayoutColumns = new LayoutColumns();
	selectedFinder: LayoutFinder;
	selectedOrder: LayoutOrder;
	finders: LayoutFinder[] = [];
	orders: LayoutOrder[] = [];

	toggleSearch(): void {
		this.showSearchPanel = !this.showSearchPanel;
	}

	addFinder(code: string, label: string, icon: string): LayoutFinder {
		const item = new LayoutFinder();

		item.code = code;
		item.label = label;
		item.icon = icon;
		item.visible = true;
		item.statementId = 'textual';
		item.columns = this.searchColumns.clone().columns;

		this.setFinder(item);

		return item;
	}

	getSelectedFinder(): LayoutFinder {
		if (this.selectedFinder == null) {
			this.finders.forEach(item => {
				if (item.selected) {
					this.selectedFinder = item;
					return;
				}
			});
		}

		return this.selectedFinder;
	}

	getFinder(code: string): LayoutFinder {
		const index = this.finders.findIndex(item => (item.code === code));

		return (index < 0) ? null : this.finders[index];
	}

	setFinder(finder: LayoutFinder): LayoutFinder {
		const index = this.finders.findIndex(item => (item.code === finder.code));

		if (index < 0) {
			this.finders.push(finder);
		} else {
			this.finders[index] = finder;
		}

		return finder;
	}

	addOrder(code: string, label: string): LayoutOrder {
		const item = new LayoutOrder();

		item.code = code;
		item.label = label;
		item.columns = plainToClass(LayoutColumn, this.searchColumns.columns);

		this.setOrder(item);

		return item;
	}

	getOrder(code: string): LayoutOrder {
		const index = this.orders.findIndex(item => (item.code === code));

		return (index < 0) ? null : this.orders[index];
	}

	setOrder(order: LayoutOrder): LayoutOrder {
		const index = this.orders.findIndex(item => (item.code === order.code));

		if (index < 0) {
			this.orders.push(order);
		} else {
			this.orders[index] = order;
		}

		return order;
	}

	getAction(code: string): LayoutColumn {
		const index = this.actionColumns.columns.findIndex(item => (item.code === code));

		if (index < 0) {
			return null;
		} else {
			return this.actionColumns.columns[index];
		}
	}

	setAction(action: LayoutColumn): LayoutColumn {
		const index = this.actionColumns.columns.findIndex(item => (item.code === action.code));

		if (index < 0) {
			this.actionColumns.columns.push(action);
		} else {
			this.actionColumns.columns[index] = action;
		}

		return action;
	}
}
