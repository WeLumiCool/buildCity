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
                name: 'UserIndex',
                path: 'user/index',
                component: () => import('./components/Admin/Admin.vue')
            }
        ]
    }
];
