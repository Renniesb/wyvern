// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'
import Datepicker from 'vuejs-datepicker';
import VueTimepicker from 'vue2-timepicker';
import moment from 'moment'


Vue.component('datepicker', Datepicker);
Vue.component('vue-timepicker', VueTimepicker);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY')
  }
})
Vue.filter('formatDate2', function(value) {
  if (value) {
    return moment(String(value)).format('YYYY-MM-DD')
  }
})
Vue.filter('24hours', function(value) {
  if (value) {
    return moment(String(value),'h:mm A').format('HH:mm')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Datepicker },
  store:store
})


