export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'data type',
			legend: 'DATA-TYPE',
			statementId: '',
			primaryKeyName: 'typeId',
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
				{
					code: 'name',
					label: 'name',
					visible: true
				}
			],
			searchControls: [
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
