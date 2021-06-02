import {ThemeMenuItem} from './menu.model';

export const MENU: ThemeMenuItem[] = [
	// {
	//     id: 1,
	//     label: 'MENUITEMS.MENU.TEXT',
	//     isTitle: true
	// },
	{
		id: 2,
		label: 'Domains',
		subItems: [
			{
				id: 3,
				label: 'Country',
				link: '/dashboards/country-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Territory',
				link: '/dashboards/territory-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'National Type',
				link: '/dashboards/national-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Company Type',
				link: '/dashboards/company-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Department Type',
				link: '/dashboards/department-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Dimension Type',
				link: '/dashboards/dimension-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Industry Type',
				link: '/dashboards/industry-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Partner Type',
				link: '/dashboards/partner-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Address Type',
				link: '/dashboards/address-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Phone Type',
				link: '/dashboards/phone-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Email Type',
				link: '/dashboards/email-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Social Type',
				link: '/dashboards/social-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Bank Type',
				link: '/dashboards/bank-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Document Type',
				link: '/dashboards/document-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Religion Type',
				link: '/dashboards/religion-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Education Type',
				link: '/dashboards/education-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Graduate Type',
				link: '/dashboards/graduate-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Occupation Type',
				link: '/dashboards/occupation-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Position Type',
				link: '/dashboards/position-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Relation Type',
				link: '/dashboards/relation-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'License Type',
				link: '/dashboards/license-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Hobby Type',
				link: '/dashboards/hobby-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Domain Type',
				link: '/dashboards/domain-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Domain',
				link: '/dashboards/domain-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Measure',
				link: '/dashboards/measure-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Product',
				link: '/dashboards/product-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Data Type',
				link: '/dashboards/data-type-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Partner Entry',
				link: '/dashboards/partner-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Partner Experience',
				link: '/dashboards/partner-experience-table',
				parentId: 2
			},
			{
				id: 4,
				label: 'Partner Hobby',
				link: '/dashboards/partner-hobby-table',
				parentId: 2
			}
		]
	},
	/**
	{
		id: 6,
		isLayout: true
	},
	{
		id: 7,
		label: 'MENUITEMS.APPS.TEXT',
		isTitle: true
	},
	{
		id: 8,
		label: 'MENUITEMS.CALENDAR.TEXT',
		icon: 'bx-calendar',
		link: '',
	},
	{
		id: 9,
		label: 'MENUITEMS.CHAT.TEXT',
		icon: 'bx-chat',
		link: '',
		badge: {
			variant: 'success',
			text: 'MENUITEMS.CHAT.BADGE',
		},
	},
	{
		id: 10,
		label: 'MENUITEMS.ECOMMERCE.TEXT',
		icon: 'bx-store',
		subItems: [
			{
				id: 11,
				label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
				link: '',
				parentId: 10
			},
			{
				id: 12,
				label: 'product-detail',
				link: '',
				parentId: 10
			},
			{
				id: 13,
				label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
				link: '',
				parentId: 10
			},
			{
				id: 14,
				label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
				link: '',
				parentId: 10
			},
			{
				id: 15,
				label: 'MENUITEMS.ECOMMERCE.LIST.CART',
				link: '',
				parentId: 10
			},
			{
				id: 16,
				label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
				link: '',
				parentId: 10
			},
			{
				id: 17,
				label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
				link: '',
				parentId: 10
			},
			{
				id: 18,
				label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
				link: '',
				parentId: 10
			},
		]
	},
	{
		id: 19,
		label: 'MENUITEMS.CRYPTO.TEXT',
		icon: 'bx-bitcoin',
		subItems: [
			{
				id: 20,
				label: 'MENUITEMS.CRYPTO.LIST.WALLET',
				link: '',
				parentId: 19
			},
			{
				id: 21,
				label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
				link: '',
				parentId: 19
			},
			{
				id: 22,
				label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
				link: '',
				parentId: 19
			},
			{
				id: 23,
				label: 'MENUITEMS.CRYPTO.LIST.LENDING',
				link: '',
				parentId: 19
			},
			{
				id: 24,
				label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
				link: '',
				parentId: 19
			},
			{
				id: 25,
				label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
				link: '',
				parentId: 19
			},
			{
				id: 26,
				label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
				link: '',
				parentId: 19
			}
		]
	},
	{
		id: 27,
		label: 'MENUITEMS.EMAIL.TEXT',
		icon: 'bx-envelope',
		subItems: [
			{
				id: 28,
				label: 'MENUITEMS.EMAIL.LIST.INBOX',
				link: '',
				parentId: 27
			},
			{
				id: 29,
				label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
				link: '',
				parentId: 27
			}
		]
	},
	{
		id: 30,
		label: 'MENUITEMS.INVOICES.TEXT',
		icon: 'bx-receipt',
		subItems: [
			{
				id: 31,
				label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
				link: '',
				parentId: 30
			},
			{
				id: 32,
				label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
				link: '',
				parentId: 30
			},
		]
	},
	{
		id: 33,
		label: 'MENUITEMS.PROJECTS.TEXT',
		icon: 'bx-briefcase-alt-2',
		subItems: [
			{
				id: 34,
				label: 'MENUITEMS.PROJECTS.LIST.GRID',
				link: '',
				parentId: 33
			},
			{
				id: 35,
				label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
				link: '',
				parentId: 33
			},
			{
				id: 36,
				label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
				link: '',
				parentId: 33
			},
			{
				id: 37,
				label: 'MENUITEMS.PROJECTS.LIST.CREATE',
				link: '',
				parentId: 33
			}
		]
	},
	{
		id: 38,
		label: 'MENUITEMS.TASKS.TEXT',
		icon: 'bx-task',
		subItems: [
			{
				id: 39,
				label: 'MENUITEMS.TASKS.LIST.TASKLIST',
				link: '',
				parentId: 38
			},
			{
				id: 40,
				label: 'MENUITEMS.TASKS.LIST.KANBAN',
				link: '',
				parentId: 38
			},
			{
				id: 41,
				label: 'MENUITEMS.TASKS.LIST.CREATETASK',
				link: '',
				parentId: 38
			}
		]
	},
	{
		id: 42,
		label: 'MENUITEMS.CONTACTS.TEXT',
		icon: 'bxs-user-detail',
		subItems: [
			{
				id: 43,
				label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
				link: '',
				parentId: 42
			},
			{
				id: 44,
				label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
				link: '',
				parentId: 42
			},
			{
				id: 45,
				label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
				link: '',
				parentId: 42
			}
		]
	},
	{
		id: 46,
		label: 'MENUITEMS.PAGES.TEXT',
		isTitle: true
	},
	{
		id: 47,
		label: 'MENUITEMS.AUTHENTICATION.TEXT',
		icon: 'bx-user-circle',
		subItems: [
			{
				id: 48,
				label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
				link: '',
				parentId: 47
			},
			{
				id: 49,
				label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
				link: '',
				parentId: 47
			},
			{
				id: 50,
				label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
				link: '',
				parentId: 47
			},
			{
				id: 51,
				label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
				link: '',
				parentId: 47
			}
		]
	},
	{
		id: 52,
		label: 'MENUITEMS.UTILITY.TEXT',
		icon: 'bx-file',
		subItems: [
			{
				id: 53,
				label: 'MENUITEMS.UTILITY.LIST.STARTER',
				link: '',
				parentId: 52
			},
			{
				id: 54,
				label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
				link: '',
				parentId: 52
			},
			{
				id: 55,
				label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
				link: '',
				parentId: 52
			},
			{
				id: 56,
				label: 'MENUITEMS.UTILITY.LIST.FAQS',
				link: '',
				parentId: 52
			},
			{
				id: 57,
				label: 'MENUITEMS.UTILITY.LIST.PRICING',
				link: '',
				parentId: 52
			},
			{
				id: 58,
				label: 'MENUITEMS.UTILITY.LIST.ERROR404',
				link: '',
				parentId: 52
			},
			{
				id: 59,
				label: 'MENUITEMS.UTILITY.LIST.ERROR500',
				link: '',
				parentId: 52
			},
		]
	},
	{
		id: 60,
		label: 'MENUITEMS.COMPONENTS.TEXT',
		isTitle: true
	},
	{
		id: 61,
		label: 'MENUITEMS.UIELEMENTS.TEXT',
		icon: 'bx-tone',
		subItems: [
			{
				id: 62,
				label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
				link: '',
				parentId: 61
			},
			{
				id: 63,
				label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
				link: '',
				parentId: 61
			},
			{
				id: 64,
				label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
				link: '',
				parentId: 61
			},
			{
				id: 65,
				label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
				link: '',
				parentId: 61
			},
			{
				id: 66,
				label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
				link: '',
				parentId: 61
			},
			{
				id: 67,
				label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
				link: '',
				parentId: 61
			},
			{
				id: 68,
				label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
				link: '',
				parentId: 61
			},
			{
				id: 69,
				label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
				link: '',
				parentId: 61
			},
			{
				id: 70,
				label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
				link: '',
				parentId: 61
			},
			{
				id: 71,
				label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
				link: '',
				parentId: 61
			},
			{
				id: 72,
				label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
				link: '',
				parentId: 61
			},
			{
				id: 73,
				label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
				link: '',
				parentId: 61
			},
			{
				id: 74,
				label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
				link: '',
				parentId: 61
			},
			{
				id: 75,
				label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
				link: '',
				parentId: 61
			},
			{
				id: 76,
				label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
				link: '',
				parentId: 61
			},
			{
				id: 77,
				label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
				link: '',
				parentId: 61
			},
			{
				id: 78,
				label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
				link: '',
				parentId: 61
			},
		]
	},
	{
		id: 79,
		label: 'MENUITEMS.FORMS.TEXT',
		icon: 'bxs-eraser',
		subItems: [
			{
				id: 80,
				label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
				link: '',
				parentId: 79
			},
			{
				id: 81,
				label: 'MENUITEMS.FORMS.LIST.VALIDATION',
				link: '',
				parentId: 79
			},
			{
				id: 82,
				label: 'MENUITEMS.FORMS.LIST.ADVANCED',
				link: '',
				parentId: 79
			},
			{
				id: 83,
				label: 'MENUITEMS.FORMS.LIST.EDITOR',
				link: '',
				parentId: 79
			},
			{
				id: 84,
				label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
				link: '',
				parentId: 79
			},
			{
				id: 85,
				label: 'MENUITEMS.FORMS.LIST.REPEATER',
				link: '',
				parentId: 79
			},
			{
				id: 86,
				label: 'MENUITEMS.FORMS.LIST.WIZARD',
				link: '',
				parentId: 79
			},
			{
				id: 87,
				label: 'MENUITEMS.FORMS.LIST.MASK',
				link: '',
				parentId: 79
			}
		]
	},
	{
		id: 88,
		icon: 'bx-list-ul',
		label: 'MENUITEMS.TABLES.TEXT',
		subItems: [
			{
				id: 89,
				label: 'MENUITEMS.TABLES.LIST.BASIC',
				link: '',
				parentId: 88
			},
			{
				id: 90,
				label: 'MENUITEMS.TABLES.LIST.ADVANCED',
				link: '',
				parentId: 88
			}
		]
	},
	{
		id: 91,
		icon: 'bxs-bar-chart-alt-2',
		label: 'MENUITEMS.CHARTS.TEXT',
		subItems: [
			{
				id: 92,
				label: 'MENUITEMS.CHARTS.LIST.APEX',
				link: '',
				parentId: 91
			},
			{
				id: 93,
				label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
				link: '',
				parentId: 91
			},
			{
				id: 94,
				label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
				link: '',
				parentId: 91
			},
			{
				id: 95,
				label: 'MENUITEMS.CHARTS.LIST.ECHART',
				link: '',
				parentId: 91
			}
		]
	},
	{
		id: 96,
		label: 'MENUITEMS.ICONS.TEXT',
		icon: 'bx-aperture',
		subItems: [
			{
				id: 97,
				label: 'MENUITEMS.ICONS.LIST.BOXICONS',
				link: '',
				parentId: 96
			},
			{
				id: 98,
				label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
				link: '',
				parentId: 96
			},
			{
				id: 99,
				label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
				link: '',
				parentId: 96
			},
			{
				id: 100,
				label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
				link: '',
				parentId: 96
			},
		]
	},
	{
		id: 101,
		label: 'MENUITEMS.MAPS.TEXT',
		icon: 'bx-map',
		subItems: [
			{
				id: 102,
				label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
				link: '',
				parentId: 101
			}
		]
	},
	{
		id: 103,
		label: 'MENUITEMS.MULTILEVEL.TEXT',
		icon: 'bx-share-alt',
		subItems: [
			{
				id: 104,
				label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
				link: '',
				parentId: 103
			},
			{
				id: 105,
				label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
				parentId: 103,
				subItems: [
					{
						id: 106,
						label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
						link: '',
						parentId: 105,
					},
					{
						id: 107,
						label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
						link: '',
						parentId: 105,
					}
				]
			},
		]
	}
	*/
];

