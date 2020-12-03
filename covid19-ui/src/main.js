import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'

//引入 ant-design-vue
import AntD from 'ant-design-vue'


//引入样式文件
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false

//注册插件 ant-design-vue
Vue.use(AntD);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
