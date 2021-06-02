export const TREE_CONFIG  = {
	layout:
		{
			name: 'workspace',
			legend: 'WORKSPACE',
			statementId: '',
			primaryKeyName: 'workspaceId',
			parentKeyName: 'parentId',
			partitionKeyName: '',
			editPosition: '',
			enableToolbar: true,
			enableRowCheck: true,
			enableFacet: true,
			enableFilter: true,
			enableAdd: true,
			enableEdit: true,
			enableDelete: true,
			enableExport: true,
			expandedIcon: 'pi pi-folder-open',
			collapsedIcon: 'pi pi-folder',
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
