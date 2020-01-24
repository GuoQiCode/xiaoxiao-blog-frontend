import Vue from 'vue'
import App from './App.vue'


/**
 * 路由导入
 */
import router from "./router/index"
router.beforeEach((to,from,next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
