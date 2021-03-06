import Vue from 'vue'
import App from './App.vue'
import Contadores from './Contadores.vue'
Vue.config.productionTip = false

// Registro componete Global
Vue.component('Contadores', Contadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
