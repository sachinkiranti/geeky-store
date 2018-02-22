import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Blog from '@/components/Blog/Blog'
import CreateBlog from '@/components/Blog/CreateBlog'
import EditBlog from '@/components/Blog/EditBlog'

import Link from '@/components/Link/Link'
import CreateLink from '@/components/Link/CreateLink'
import EditLink from '@/components/Link/EditLink'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,

        children: [
            {
                path: 'create',
                name: 'createBlog',
                component: CreateBlog
            },
            {
                path: 'edit/:id',
                name: 'editBlog',
                component: EditBlog
            }
        ]
    },
    {
        path: '/link',
        name: 'Link',
        component: Link,

        children: [
            {
                path: 'create',
                name: 'CreateLink',
                component: CreateLink
            },
            {
                path: 'edit/:id',
                name: 'EditLink',
                component: EditLink
            }
        ]   
    }
  ]
})
