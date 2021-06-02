export class ServiceContext {
	layoutId: number;
	code: string;
	name: string;
	statementId: string;
	command: string;
	description: string;
	status: number;
	start: number;
	limit: number;

	data: any[] = [];
	params: ServiceParam[] = [];
	orders: ServiceParam[] = [];

	constructor(data: any[] = null, actionCmd: string = null) {
		this.command = actionCmd;
		this.data = data;

		if (data != null) {
			// data.forEach((item, index) => {this.data[index] = JSON.stringify(item)})

		}
	}

	reset(): void {
		this.params.forEach(
			(item, index) => {
				this.params[index].value = this.params[index].defaultValue;
			}
		);

		this.orders.forEach(
			(item, index) => {
				this.orders[index].ascending = true;
			}
		);
	}

	addParam(type: string = 'search', code: string, name: string = code, property: string = code, operator: string = 'eq', value: any = null): ServiceParam {
		const index = this.params.findIndex(item => (item.code === code) && (item.type === type));

		if (index < 0) {
			const item: ServiceParam = new ServiceParam();

			item.type = type;
			item.code = code;
			item.name = name;
			item.property = code;
			item.operator = operator;
			item.value = value;

			this.params.push(item);

			return item;
		} else {
			this.orders[index].value = value;

			return this.orders[index];
		}
	}

	addSearchBy(code: string, name: string, property: string, operator: string = 'eq', value: any = null): ServiceParam {
		const index = this.params.findIndex(item => item.code === code);

		if (index < 0) {
			const item: ServiceParam = new ServiceParam();

			item.code = code;
			item.name = name;
			item.property = code;
			item.operator = operator;
			item.value = value;

			this.params.push(item);

			return item;
		} else {
			this.orders[index].value = value;

			return this.orders[index];
		}
	}

	getSearchBy(name: string): ServiceParam {
		const results = this.params.filter(item => item.property === name);

		if (results.length > 0) {
			return results[0];
		}

		return null;
	}

	setSearchBy(code: string, value: any, operator: string = 'eq'): ServiceParam {
		const index = this.params.findIndex(item => item.code === code);

		if (index < 0) {
			return this.addSearchBy(code, code, code, operator, value);
		} else {
			this.params[index].operator = operator;
			this.params[index].value = value;

			return this.params[index];
		}
	}

	addOrderBy(code: string, name: string, property: string, ascending: boolean = true): ServiceParam {
		const index = this.orders.findIndex(item => item.code === code);

		if (index < 0) {
			const item: ServiceParam = new ServiceParam();

			item.code = code;
			item.name = name ? name : property;
			item.property = property;
			item.ascending = ascending;
			item.type = 'order';

			this.orders.push(item);

			return item;
		} else {
			this.orders[index].ascending = ascending;

			return this.orders[index];
		}
	}

	getOrderBy(name: string): ServiceParam {
		const results = this.orders.filter(item => item.code === name);

		if (results.length > 0) {
			return results[0];
		}

		return null;
	}

	setOrderBy(code: string, ascending: boolean = true): ServiceParam {
		const index = this.orders.findIndex(item => item.code === code);

		if (index >= 0) {
			this.orders[index].ascending = ascending;

			return this.orders[index];
		} else {
			return this.addOrderBy(code, code, code, ascending);
		}
	}
}

export class ServiceParam {
	paramId: number;
	type: string;
	code: string;
	name: string;
	property: string;
	value: string;
	defaultValue: string;
	operator: string;
	ascending: boolean;
	status: number;

	constructor(paramId: number = 0) {
		this.paramId = paramId;
	}
}
