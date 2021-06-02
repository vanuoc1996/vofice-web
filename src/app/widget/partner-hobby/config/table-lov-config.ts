export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'partner hobby',
			legend: 'PARTNER-HOBBY',
			statementId: 'partner',
			primaryKeyName: 'hobbyId',
			parentKeyName: '',
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
			],
			searchControls: [
				{
					code: 'partnerId',
					field: 'partnerId',
					label: 'partnerId',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'typeId',
					field: 'typeId',
					label: 'typeId',
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
				]
		}
};
