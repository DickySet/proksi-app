import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import('../views/login/Index.vue')
    },
    {
        path: "/menu",
        name: "menu",
        component: () => import('../views/Index.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) { // ketika token tidak ada, kembali ke router /
                next('/');
            } else { // kondisi ketika tokennya ada, bisa lanjut ke router yang dituju
                next();
            }
        }
    },
    {
        path: "/register",
        name: "register.index",
        component: () => import("../views/register/Index.vue"),
    },
    {
        path: "/profile",
        name: "profile",
        component: () => import('../views/profile/Index.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) { // ketika token tidak ada, kembali ke router /
                next("/");
            } else { // kondisi ketika tokennya ada, bisa lanjut ke router yang dituju
                next();
            }
        },
    },
    {
        path: "/personal-information",
        name: "personal-information",
        component: () => import('../views/profile/EditProfile.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) { // ketika token tidak ada, kembali ke router /
                next('/');
            } else { // kondisi ketika tokennya ada, bisa lanjut ke router yang dituju
                next();
            }
        }
    },
    {
        path: "/change-password",
        name: "change-password",
        component: () => import('../views/profile/ChangePassword.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) { // ketika token tidak ada, kembali ke router /
                next('/');
            } else { // kondisi ketika tokennya ada, bisa lanjut ke router yang dituju
                next();
            }
        }
    },
    {
        path: "/about",
        name: "about",
        component: () => import('../views/about/Index.vue'),
        props: true,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) { // ketika token tidak ada, kembali ke router /
                next('/');
            } else { // kondisi ketika tokennya ada, bisa lanjut ke router yang dituju
                next();
            }
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router