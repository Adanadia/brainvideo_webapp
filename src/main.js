import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'lib-flexible/flexible';
import './assets/styles/normalize.css';
import './assets/fonts/iconfont.css';
import Toast from './common/components/toast/toast';

Vue.prototype.$toast = Toast;
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
