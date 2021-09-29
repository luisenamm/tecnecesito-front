import React from 'react'
import { authRoles } from '../../auth/authRoles'

const dashboardRoutes = [
    {
        path: '/dashboard/default',
        component: React.lazy(() => import('./Analytics')),
        auth: authRoles.sa,
    },
    {
        path: '/dashboard/history',
        component: React.lazy(() => import('./Analytics2')),
        auth: authRoles.sa,
    },
    {
        path: '/dashboard/favorites',
        component: React.lazy(() => import('./Favs')),
        auth: authRoles.sa,
    },
    {
        path: '/dashboard/jobs',
        component: React.lazy(() => import('./Jobs')),
        auth: authRoles.sa,
    },
]

export default dashboardRoutes
