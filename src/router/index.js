import VueRouter from "vue-router"
import Vue from "vue"
import newArticle from "../view/index/newArticle";

Vue.use(VueRouter)

/**
 * 首页
 * @constructor
 */
const Index = () => import("../view/index/index")
/**
 * 导入Magazine组件 文章杂谈组件
 */
const Magazine = () => import("../view/index/index-magazine")
/**
 * 导入推荐文章组件
 * @constructor
 */
const Recommend = () => import("../view/index/recommend")
/**
 * 导入我的博客信息
 * @constructor
 */
const MeBlog = () => import("../view/index/me-blog")
/**
 * 导入我的心情
 * @constructor
 */
const Mood = () => import("../view/index/mood")

/**
 * 导入归档组件
 */
const Pigeonhole = () => import('../view/index/pigeonhole')

/**
 * 导入留言组件
 * @constructor
 */
const LeaveAMessage = () => import("../view/index/leaveAMessage")

/**
 * 最新文章列表
 * @constructor
 */
const NewArticle = () => import("../view/index/newArticle")


/**
 * 关于我的
 * @constructor
 */
const About = () => import("../view/index/about")

/**
 * 个人分享
 * @constructor
 */
const Share = () => import("../view/index/share")

/**
 * 点点滴滴
 * @constructor
 */
const Drop = ()=> import("../view/index/drop")

/**
 * 相册
 * @constructor
 */
const Photo = () => import("../view/index/photo")

/**
 * 分类文章
 * @constructor
 */
const Type = ()=> import("../view/index/type")



/**
 *                              非主页面跳转
 * ===============================================================================
 */


/**
 * 相册内的所有照片详情查看
 * @constructor
 */
const SelectPhoto =()=> import("../components/photo/selectPhoto")

/**
 * 文章读取
 * @constructor
 */
const Article = () => import("../common/article/article")

/**
 * 配置路由
 * @type {*[]}
 */
const routes = [
  /**
   * 首页路由
   */
  {
    path: "/",
    component: Index,
    meta:{
      title:"首页~欢迎来到作落潇城博客๑~我的个人小窝~~~"
    }
  },
  {
    path: "/index",
    redirect: "/",
    meta:{
      title:"首页๑"
    }
  },

  /**
   * 文章杂谈页面路由
   */
  {
    path: "/magazine",
    component: Magazine,
    meta:{
      title: "文章杂谈๑"
    }
  },
  {
    path: "/recommend",
    component: Recommend,
    meta:{
      title: "文章推荐๑"
    }
  },
  {
    path: "/meblog",
    component: MeBlog,
    meta:{
      title: "我的博文๑"
    }
  },
  /**
   * 我的心情页面
   */
  {
    path: "/mood",
    component: Mood,
    meta:{
      title: "我的心情~秒速五厘米๑"
    }
  },
  {
    path: "/pigeonhole",
    component: Pigeonhole,
    meta:{
      title: "学习分类~秒速五厘米๑"
    }
  },
  {
    path: "/leave_a_message",
    component: LeaveAMessage,
    meta:{
      title: "给我留言~世界连接着我的眼睛๑"
    }
  },
  {
    path: "/new_article",
    component: NewArticle,
    meta:{
      title: "最新推荐~秒速五厘米๑"
    }
  },
  {
    path: "/about",
    component: About,
    meta:{
      title: "关于我~有时候有点衰呢"
    }
  },
  {
    path: "/share",
    component: Share,
    meta:{
      title: "我的分享~讲我的快乐分享给你๑"
    }
  },
  {
    path:"/drop",
    component:Drop,
    meta:{
      title: "我的点点滴滴~来到这世界让我有点措手不急呢๑"
    }
  },
  {
    path:"/photo",
    component:Photo,
    meta:{
      title: "我的个人相册~留下点或者的痕迹吧"
    }
  },{
    path:"/select_photo",
    component:SelectPhoto,
    meta:{
      title: "详情~有时候有点衰呢"
    }
  },
  {
    path:"/type",
    component:Type,
    meta:{
      title: "分类~有时候有点衰呢"
    }
  },
  {
    path:"/article",
    component:Article,
    meta:{
      title: "关于我我"
    }
  }
]
/**
 * 路由配置
 * @type {VueRouter}*
 */
const router = new VueRouter({
  /**
   * 注册路由
   */
  routes,
  /**
   * 修改路由模式
   */
  mode: "history"
})
export default router