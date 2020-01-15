export default [
  {
    path: '/demo',
    component: () => import('@/views/demo/index')
  },
  {
    path: '/instruct',
    component: () => import('@/views/demo/instruct')
  },
  {
    path: '/parent',
    component: () => import('@/views/demo/parent')
  },
  {
    path: '/for',
    component: () => import('@/views/demo/for')
  },
  {
    path: '/toast',
    component: () => import('@/views/demo/Toast.vue')
  },
  {
    path: '/nextTick',
    component: () => import('@/views/demo/nextTick')
  },
  {
    path: '/render',
    component: () => import('@/views/demo/render')
  },
  {
    path: '/unRender',
    component: () => import('@/views/demo/unRender')
  },
  {
    path: '/directive',
    component: () => import('@/views/demo/directive')
  },
  {
    path: '/provide',
    component: () => import('@/views/demo/provide/parent')
  },
  {
    path: '/attr',
    component: () => import('@/views/demo/attrs/parent')
  },
  {
    path: '/set',
    component: () => import('@/views/demo/set')
  },
  {
    path: '/model',
    component: () => import('@/views/demo/modeL/parent')
  },
  {
    path: '/ref',
    component: () => import('@/views/demo/ref/parent')
  },
  {
    path: '/emit',
    component: () => import('@/views/demo/emit/parent')
  },
  {
    path: '/bus',
    component: () => import('@/views/demo/bus/parent')
  },
  {
    path: '/vuex',
    component: () => import('@/views/demo/vuex')
  },
  {
    path: '/referer',
    component: () => import('@/views/demo/Referer.vue')
  }
]