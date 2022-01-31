import Vue from 'vue';
import animated from 'animate.css' 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/index.css'
import App from './App.vue';

Vue.use(animated);
Vue.use(ElementUI);

const myvue = new Vue({
  el: '#app',
  render: h => h(App)
});




