export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'product',
			legend: 'PRODUCT',
			statementId: 'textual',
			primaryKeyName: 'productId',
			parentKeyName: 'parentId',
			partitionKeyName: '',
			editPosition: '',
			enableToolbar: true,
			enableRowCheck: true,
			enableFacet: true,
			enableFilter: true,
			enableAdd: false,
			enableEdit: false,
			enableDelete: false,
			enableExport: false,
			toggleControls: [
				{
					code: 'name',
					label: 'name',
					visible: true
				}
			],
			searchControls: [
				{
					code: 'parentId',
					field: 'parentId',
					label: 'parentId',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'type',
					field: 'type',
					label: 'type',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'textual',
					field: 'textual',
					label: 'textual',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'status',
					field: 'status',
					label: 'status',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				}
			],
			finders: [
				{
					code: 'all',
					label: 'all',
					icon: 'pi pi-apple',
					disabled: false,
					visible: true,
					selected: false,
					custom: true,
					route: '',
					routeParams: null,
					columns: [
						{
							code: 'parentId',
							label: 'parentId',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'type',
							label: 'type',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'textual',
							label: 'textual',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'status',
							label: 'status',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						}
					]
					},
				{
					code: 'mine',
					label: 'mine',
					icon: 'pi pi-apple',
					disabled: false,
					visible: true,
					selected: false,
					custom: true,
					route: '',
					routeParams: null,
					columns: [
						{
							code: 'parentId',
							label: 'parentId',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'type',
							label: 'type',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'textual',
							label: 'textual',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						},
						{
							code: 'status',
							label: 'status',
							disabled: false,
							visible: true,
							initValue: null,
							inputValue: null,
							options: null
						}
					]
					}
				],
			orders: [
				{
					code: 'default',
					label: 'default'
				}
				]
		}
};
