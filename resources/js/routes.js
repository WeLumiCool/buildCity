export const route = [
    {
        name: 'home',
        path: '/',
        component: () => import('./components/Public/Home.vue'),
    },
    {
        name: 'admin',
        path: '/admin',
        component: {render: h => h('router-view')},
        children: [
            {
                name: 'postDashboard',
                path: 'post/dashboard',
                component: () => import('./components/Admin/Admin.vue')
            }
        ]
    }
];
