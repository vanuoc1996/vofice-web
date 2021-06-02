export const TABLE_CONFIG  = {
	"layout":
		{
			"name": "workspace approval",
			"legend": "WORKSPACE-APPROVAL",
			"statementId": "",
			"primaryKeyName": "approvalId",
			"parentKeyName": "",
			"partitionKeyName": "",
			"editPosition": "",
			"enableToolbar": true,
			"enableRowCheck": true,
			"enableFacet": true,
			"enableFilter": true,
			"enableAdd": true,
			"enableEdit": true,
			"enableDelete": true,
			"enableExport": true,
			"toggleControls": [
			],
			"searchControls": [
				{
					"code": "approveStatus",
					"field": "approveStatus",
					"label": "approveStatus",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "status",
					"field": "status",
					"label": "status",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				}
			],
			"finders": [
				],
			"orders": [
				{
					"code": "default",
					"label": "default"
				}
				]
		}
};
