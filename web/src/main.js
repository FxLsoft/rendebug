import Vue from 'vue';
import VueRouter from 'vue-router';
import routerJs from './router';
import App from './app.vue';
import iView from '@iview';
import 'iview/dist/styles/iview.css';

//highcharts的引入
import VueHighcharts from 'vue-highcharts';
 
Vue.use(VueHighcharts);
Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(iView);

const router = new VueRouter(routerJs);

new Vue({
    router,
    el: '#app',
    render: c => c(App),
})