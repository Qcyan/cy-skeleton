import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//new Vue({
//  router,
//  store,
//  render: h => h(App)
//});
//// 如果 JS 晚于 CSS 加载完成，那直接执行渲染
//if (process.env.NODE_ENV === 'production') {
//  if (window.STYLE_READY) {
//    app.$mount('#app')
//  }
//} else {
//  app.$mount('#app')
//}
