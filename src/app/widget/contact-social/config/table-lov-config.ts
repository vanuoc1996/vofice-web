export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'contact social',
			legend: 'CONTACT-SOCIAL',
			statementId: 'class_name',
			primaryKeyName: 'contactId',
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
					code: 'resourceName',
					field: 'resourceName',
					label: 'resourceName',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'resourceId',
					field: 'resourceId',
					label: 'resourceId',
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
