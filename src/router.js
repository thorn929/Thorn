import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/routes/'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/thorn/',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = {}
        if (!auth.loggedIn()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router
