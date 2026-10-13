import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'las la-tachometer-alt',
    isCollapsed: true,
    subItems: [
      {
        id: 5,
        label: 'MENUITEMS.DASHBOARD.LIST.ECOMMERCE',
        link: '/',
        parentId: 2
      },
      {
        id: 7,
        label: 'MENUITEMS.DASHBOARD.LIST.PROJECTS',
        link: '/projects',
        parentId: 2
      }
    ]
  },
  {
    id: 8,
    label: 'MENUITEMS.APPS.TEXT',
    icon: 'lab la-delicious',
    isCollapsed: true,
    subItems: [
      {
        id: 12,
        label: 'MENUITEMS.APPS.LIST.ECOMMERCE',
        link: '/mailbox',
        parentId: 8,
        isCollapsed: true,
        subItems: [
          {
            id: 18,
            label: 'MENUITEMS.APPS.LIST.CUSTOMERS',
            link: '/ecommerce/customers',
            parentId: 12
          },
          {
            id: 21,
            label: 'MENUITEMS.APPS.LIST.SELLERS',
            link: '/ecommerce/sellers',
            parentId: 12
          },
          {
            id: 22,
            label: 'MENUITEMS.APPS.LIST.SELLERDETAILS',
            link: '/ecommerce/seller-details',
            parentId: 12
          }
        ]
      },
      {
        id: 31,
        label: 'MENUITEMS.APPS.LIST.CRM',
        parentId: 8,
        isCollapsed: true,
        subItems: [
          {
            id: 32,
            label: 'MENUITEMS.APPS.LIST.CONTACTS',
            link: '/crm/contacts',
            parentId: 31
          },
          {
            id: 33,
            label: 'MENUITEMS.APPS.LIST.COMPANIES',
            link: '/crm/companies',
            parentId: 31
          },
          {
            id: 34,
            label: 'MENUITEMS.APPS.LIST.DEALS',
            link: '/crm/deals',
            parentId: 31
          },
          {
            id: 35,
            label: 'MENUITEMS.APPS.LIST.LEADS',
            link: '/crm/leads',
            parentId: 31
          }
        ]
      },
      {
        id: 36,
        label: 'MENUITEMS.APPS.LIST.CRYPTO',
        parentId: 8,
        isCollapsed: true,
        subItems: [
          {
            id: 38,
            label: 'MENUITEMS.APPS.LIST.ORDERS',
            link: '/crypto/orders',
            parentId: 36
          }
        ]
      },
      {
        id: 46,
        label: 'MENUITEMS.APPS.LIST.SUPPORTTICKETS',
        parentId: 8,
        isCollapsed: true,
        subItems: [
          {
            id: 47,
            label: 'MENUITEMS.APPS.LIST.LISTVIEW',
            link: '/tickets/list',
            parentId: 46
          },
          {
            id: 48,
            label: 'MENUITEMS.APPS.LIST.TICKETDETAILS',
            link: '/tickets/details',
            parentId: 46
          }
        ]
      },
      {
        id: 64,
        label: 'MENUITEMS.APPS.LIST.APIKEY',
        link: '/apikey',
        parentId: 8,
      },
    ]
  },
  {
    id: 54,
    label: 'MENUITEMS.PAGES.TEXT',
    isTitle: true
  },
  {
    id: 55,
    label: 'MENUITEMS.AUTHENTICATION.TEXT',
    icon: 'lar la-user-circle',
    isCollapsed: true,
    subItems: [
      {
        id: 56,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNIN',
        parentId: 49,
        link: '/auth/signin',
      },
      {
        id: 59,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SIGNUP',
        parentId: 49,
        link: '/auth/signup',
      },
      {
        id: 62,
        label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDRESET',
        parentId: 49,
        link: '/auth/pass-reset',
      },
      {
        id: 62,
        label: 'MENUITEMS.AUTHENTICATION.LIST.PASSWORDCREATE',
        parentId: 49,
        link: '/auth/pass-create',
      },
      {
        id: 65,
        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
        parentId: 49,
        link: '/auth/lockscreen',
      },
      {
        id: 68,
        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
        parentId: 49,
        link: '/auth/logout',
      },
      {
        id: 71,
        label: 'MENUITEMS.AUTHENTICATION.LIST.SUCCESSMESSAGE',
        parentId: 49,
        link: '/auth/success-msg',
      },
      {
        id: 74,
        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
        parentId: 49,
        link: '/auth/twostep',
      },
      {
        id: 77,
        label: 'MENUITEMS.AUTHENTICATION.LIST.ERRORS',
        parentId: 49,
        isCollapsed: true,
        subItems: [
          {
            id: 78,
            label: 'MENUITEMS.AUTHENTICATION.LIST.404BASIC',
            link: '/auth/errors/404-basic',
            parentId: 77
          },
          {
            id: 81,
            label: 'MENUITEMS.AUTHENTICATION.LIST.500',
            link: '/auth/errors/page-500',
            parentId: 77
          },
          {
            id: 81,
            label: 'MENUITEMS.AUTHENTICATION.LIST.OFFLINE',
            link: '/auth/errors/offline',
            parentId: 77
          },
        ]
      },
    ]
  },
  {
    id: 82,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'las la-pager',
    isCollapsed: true,
    subItems: [
      {
        id: 84,
        label: 'MENUITEMS.PAGES.LIST.PROFILE',
        parentId: 82,
        isCollapsed: true,
        subItems: [
          {
            id: 85,
            label: 'MENUITEMS.PAGES.LIST.SIMPLEPAGE',
            link: '/pages/profile',
            parentId: 84
          },
          {
            id: 86,
            label: 'MENUITEMS.PAGES.LIST.SETTINGS',
            link: '/pages/profile-setting',
            parentId: 84
          },
        ]
      },
      {
        id: 87,
        label: 'MENUITEMS.PAGES.LIST.TEAM',
        link: '/pages/team',
        parentId: 82
      },
      {
        id: 89,
        label: 'MENUITEMS.PAGES.LIST.FAQS',
        link: '/pages/faqs',
        parentId: 82
      },
      {
        id: 91,
        label: 'MENUITEMS.PAGES.LIST.GALLERY',
        link: '/pages/gallery',
        parentId: 82
      },
      {
        id: 92,
        label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
        link: '/pages/maintenance',
        parentId: 82
      },
      {
        id: 93,
        label: 'MENUITEMS.PAGES.LIST.COMINGSOON',
        link: '/pages/coming-soon',
        parentId: 82
      },
      {
        id: 96,
        label: 'MENUITEMS.PAGES.LIST.PRIVACYPOLICY',
        link: '/pages/privacy-policy',
        parentId: 82
      },
      {
        id: 97,
        label: 'MENUITEMS.PAGES.LIST.TERMS&CONDITIONS',
        link: '/pages/terms-condition',
        parentId: 82
      }
    ]
  },
  {
    id: 131,
    label: 'MENUITEMS.LANDING.TEXT',
    icon: 'ri-rocket-line',
    isCollapsed: true,
    subItems: [
      {
        id: 85,
        label: 'MENUITEMS.LANDING.LIST.ONEPAGE',
        link: '/landing',
        parentId: 84
      },
      {
        id: 86,
        label: 'MENUITEMS.LANDING.LIST.NFTLANDING',
        link: '/landing/nft',
        parentId: 84,
      },
      {
        id: 87,
        label: 'MENUITEMS.LANDING.LIST.JOB',
        link: '/landing/job',
        parentId: 84,
      },
    ]
  }
];
