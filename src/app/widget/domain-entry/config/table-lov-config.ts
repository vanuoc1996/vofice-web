export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'domain',
			legend: 'DOMAIN',
			statementId: 'textual',
			primaryKeyName: 'domainId',
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
				],
			orders: [
				{
					code: 'default',
					label: 'default'
				}
				]
		}
};
