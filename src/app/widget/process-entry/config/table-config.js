export const TABLE_CONFIG  = {
	"layout":
		{
			"name": "process",
			"legend": "PROCESS",
			"statementId": "textual",
			"primaryKeyName": "processId",
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
				{
					"code": "name",
					"label": "name",
					"visible": true
				}
			],
			"searchControls": [
				{
					"code": "code",
					"field": "code",
					"label": "code",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "name",
					"field": "name",
					"label": "name",
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
