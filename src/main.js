import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

const URL = 'https://vuejs-http-fc3aa.firebaseio.com/'

Vue.use(VueResource);

Vue.http.options.root = URL;
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method === 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return {messages: response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
});
