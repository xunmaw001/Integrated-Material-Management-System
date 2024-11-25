import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import caozuorizhi from '@/views/modules/caozuorizhi/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import wuzi from '@/views/modules/wuzi/list'
    import wuziChuruInout from '@/views/modules/wuziChuruInout/list'
    import wuziChuruInoutList from '@/views/modules/wuziChuruInoutList/list'
    import wuziYuyue from '@/views/modules/wuziYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import yuedu from '@/views/modules/yuedu/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryWuzi from '@/views/modules/dictionaryWuzi/list'
    import dictionaryWuziChuruInout from '@/views/modules/dictionaryWuziChuruInout/list'
    import dictionaryWuziYuyueYesno from '@/views/modules/dictionaryWuziYuyueYesno/list'
    import dictionaryYuedu from '@/views/modules/dictionaryYuedu/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryGonggao',
        name: '公告类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryWuzi',
        name: '物资类型',
        component: dictionaryWuzi
    }
    ,{
        path: '/dictionaryWuziChuruInout',
        name: '出入库类型',
        component: dictionaryWuziChuruInout
    }
    ,{
        path: '/dictionaryWuziYuyueYesno',
        name: '报名状态',
        component: dictionaryWuziYuyueYesno
    }
    ,{
        path: '/dictionaryYuedu',
        name: '月度用料类型',
        component: dictionaryYuedu
    }


    ,{
        path: '/caozuorizhi',
        name: '操作日志',
        component: caozuorizhi
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '公告',
        component: gonggao
      }
    ,{
        path: '/wuzi',
        name: '物资',
        component: wuzi
      }
    ,{
        path: '/wuziChuruInout',
        name: '出入库',
        component: wuziChuruInout
      }
    ,{
        path: '/wuziChuruInoutList',
        name: '出入库详情',
        component: wuziChuruInoutList
      }
    ,{
        path: '/wuziYuyue',
        name: '物资申报',
        component: wuziYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/yuedu',
        name: '月度用料',
        component: yuedu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;