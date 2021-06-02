import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 1
            },
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/javascript: void(0);',
                parentId: 1
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/javascript: void(0);',
                parentId: 1
            },
        ]
    },
    {
        id: 5,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 6,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '',
                parentId: 5
            },
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '',
                parentId: 5
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '',
                parentId: 5
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '',
                parentId: 5
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '',
                parentId: 5
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '',
                parentId: 5
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '',
                parentId: 5
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '',
                parentId: 5
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '',
                parentId: 5
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '',
                parentId: 5
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '',
                parentId: 5
            },
            {
                id: 17,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '',
                parentId: 5
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '',
                parentId: 5
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '',
                parentId: 5
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '',
                parentId: 5
            },
            {
                id: 21,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '',
                parentId: 5
            },
            {
                id: 22,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '',
                parentId: 5
            },
        ]
    },
    {
        id: 23,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'bx-customize',
        subItems: [
            {
                id: 24,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '',
            },
            {
                id: 25,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '',
            },
            {
                id: 26,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 27,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '',
                        parentId: 26
                    },
                    {
                        id: 28,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '',
                        parentId: 26
                    }
                ]
            },
            {
                id: 29,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 30,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 31,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 32,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 34,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '',
                        parentId: 29
                    },
                    {
                        id: 37,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '',
                        parentId: 29
                    },
                ]
            },
            {
                id: 38,
                label: 'MENUITEMS.CRYPTO.TEXT',
                icon: 'bx-bitcoin',
                subItems: [
                    {
                        id: 39,
                        label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 44,
                        label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                        link: '',
                        parentId: 38
                    },
                    {
                        id: 45,
                        label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                        link: '',
                        parentId: 38
                    }
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.PROJECTS.TEXT',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.PROJECTS.LIST.GRID',
                        link: '',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                        link: '',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                        link: '',
                        parentId: 46
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                        link: '',
                        parentId: 46
                    }
                ]
            },
            {
                id: 51,
                label: 'MENUITEMS.TASKS.TEXT',
                subItems: [
                    {
                        id: 52,
                        label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                        link: '',
                        parentId: 51
                    },
                    {
                        id: 53,
                        label: 'MENUITEMS.TASKS.LIST.KANBAN',
                        link: '',
                        parentId: 51
                    },
                    {
                        id: 54,
                        label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                        link: '',
                        parentId: 51
                    }
                ]
            },
            {
                id: 55,
                label: 'MENUITEMS.CONTACTS.TEXT',
                icon: 'bxs-user-detail',
                subItems: [
                    {
                        id: 56,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '',
                        parentId: 55
                    },
                    {
                        id: 57,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '',
                        parentId: 55
                    },
                    {
                        id: 58,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: '',
                        parentId: 55
                    }
                ]
            },
        ]
    },
    {
        id: 59,
        icon: 'bx-collection',
        label: 'MENUITEMS.COMPONENTS.TEXT',
        subItems: [
            {
                id: 60,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 61,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 63,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 64,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 67,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '',
                        parentId: 60
                    },
                    {
                        id: 68,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '',
                        parentId: 60
                    }
                ]
            },
            {
                id: 69,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 70,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '',
                        parentId: 69
                    },
                    {
                        id: 71,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '',
                        parentId: 69
                    }
                ]
            },
            {
                id: 72,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 73,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '',
                        parentId: 72
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '',
                        parentId: 72
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '',
                        parentId: 72
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '',
                        parentId: 72
                    }
                ]
            },
            {
                id: 77,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 78,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '',
                        parentId: 77
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '',
                        parentId: 77
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '',
                        parentId: 77
                    },
                    {
                        id: 81,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '',
                        parentId: 77
                    },
                ]
            },
            {
                id: 82,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 83,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '',
                        parentId: 82
                    }
                ]
            }
        ]
    },
    {
        id: 84,
        label: 'HEADER.EXTRA_PAGES.TITLE',
        icon: 'bx-file',
        subItems: [
            {
                id: 85,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 86,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '',
                        parentId: 85
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '',
                        parentId: 85
                    },
                ]
            },
            {
                id: 88,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 89,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '',
                        parentId: 88
                    },
                    {
                        id: 90,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '',
                        parentId: 88
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '',
                        parentId: 88
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '',
                        parentId: 88
                    }
                ]
            },
            {
                id: 93,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 94,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 95,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 96,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 97,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 98,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 99,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '',
                        parentId: 93
                    },
                    {
                        id: 100,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '',
                        parentId: 93
                    },
                ]
            }
        ]
    }
];

