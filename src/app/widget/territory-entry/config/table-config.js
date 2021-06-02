export const TABLE_CONFIG  = {
	"layout":
		{
			"name": "territory",
			"legend": "TERRITORY",
			"statementId": "textual",
			"primaryKeyName": "territoryId",
			"parentKeyName": "parentId",
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
				},
				{
					"code": "fullName",
					"label": "fullName",
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
					"code": "parentCode",
					"field": "parentCode",
					"label": "parentCode",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "province",
					"field": "province",
					"label": "province",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "district",
					"field": "district",
					"label": "district",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "village",
					"field": "village",
					"label": "village",
					"visible": true,
					"initialise": true,
					"placeholder": "",
					"datetime": false,
					"initValue": null,
					"inputValue": null,
					"options": null
				},
				{
					"code": "building",
					"field": "building",
					"label": "building",
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
					"code": "fullName",
					"field": "fullName",
					"label": "fullName",
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
