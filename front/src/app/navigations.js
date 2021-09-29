import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'Home',
        path: '/dashboard/default',
        icon: 'home',
    },
  /* {
        label: 'Pedidos anteriores',
        type: 'label',
    },*/

        {
            name: 'History',
            path: '/dashboard/history',
            icon: 'history',
        },
        {
            name: 'Favorites',
            path: '/dashboard/favorites',
            icon: 'favorite',
        }, 
    
        {
            name: 'Jobs',
            path: '/dashboard/jobs',
            icon: 'work',
        },
        {
            name: 'Settings',
            path: '',
            icon: 'settings',
        },
        {
            label: 'Contact Us',
            type: 'label',
        },
        {
            name: 'Phone',
            path: '',
            icon: 'phone',
        },
        {
            name: 'Mail',
            path: '',
            icon: 'mail',
        },
]
