import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Page7 from './views/nav4/Page7.vue'

let json = [

]

let routes = [
  {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
  },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
       path: '/main',
       component: Home,

       iconCls: 'el-icon-message',//图标样式class
       leaf: true,//只有一个节点
       extent: "0",
       children: [
           { path: '/main',extent: "0", component: Main, name: '主页' }
       ]
    },
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        extent: "0",
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table',extent: "0",component: Table, name: 'Table' },
            { path: '/form',extent: "0",component: Form, name: 'Form' },
            { path: '/user',extent: "0",component: user, name: '列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        extent: "0,1,2",
        children: [
            { path: '/page4',extent: "0,1,2", component: Page4, name: '页面44' },
            { path: '/page5',extent: "0,1,2", component: Page5, name: '页面5' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        extent: "0,2",
        leaf: true,//只有一个节点
        children: [
            { path: '/page6',extent: "0,2", component: Page6, name: '导航三' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '导航7',
        iconCls: 'fa fa-address-card',
        extent: "0.2",
//      leaf: true,//只有一个节点
        children: [
            { path: '/page7',extent: "0,2",component: Page6, name: '导航7' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;
