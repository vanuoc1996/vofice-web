export const TABLE_LOV_CONFIG  = {
	layout:
		{
			name: 'process activity',
			legend: 'PROCESS-ACTIVITY',
			statementId: 'order',
			primaryKeyName: 'activityId',
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
					code: 'orderId',
					field: 'orderId',
					label: 'orderId',
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
