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
 * 配置路由
 * @type {*[]}
 */
const routes = [
  /**
   * 首页路由
   */
  {
    path: "/",
    component: Index
  },
  {
    path: "/index",
    redirect: "/"
  },

  /**
   * 文章杂谈页面路由
   */
  {
    path: "/magazine",
    component: Magazine
  },
  {
    path: "/recommend",
    component: Recommend
  },
  {
    path: "/meblog",
    component: MeBlog
  },
  /**
   * 我的心情页面
   */
  {
    path: "/mood",
    component: Mood
  },
  {
    path: "/pigeonhole",
    component: Pigeonhole
  },
  {
    path: "/leave_a_message",
    component: LeaveAMessage
  },
  {
    path: "/new_article",
    component: NewArticle
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/share",
    component: Share
  },
  {
    path:"/drop",
    component:Drop
  },
  {
    path:"/photo",
    component:Photo
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