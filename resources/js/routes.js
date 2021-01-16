export const route = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/Public/Home.vue'),
    },
    {
        path: '/admin',
        component: () => import('./components/Admin/Admin.vue'),
        children: [
            {
                name: 'Users',
                path: 'users',
                component: () => import('./components/Admin/Users/Index.vue'),
            }
        ]
    }
];
