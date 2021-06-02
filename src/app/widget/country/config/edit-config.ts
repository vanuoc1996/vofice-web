export const EDIT_CONFIG  = {
	layout:
		{
			legend: 'country',
			statementId: 'textual',
			primaryKeyName: 'countryId',
			parentKeyName: '',
			partitionKeyName: '',
			controls: [
				{
					code: 'code',
					field: 'code',
					label: 'code',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'name',
					field: 'name',
					label: 'name',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'description',
					field: 'description',
					label: 'description',
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
				},
				{
					code: 'deleted',
					field: 'deleted',
					label: 'deleted',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: false,
					initValue: null,
					inputValue: null,
					options: null
				},
				{
					code: 'syncDate',
					field: 'syncDate',
					label: 'syncDate',
					visible: true,
					initialise: true,
					placeholder: '',
					datetime: true,
					initValue: null,
					inputValue: null,
					options: null
				}
			],
		}
};
