import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart as fasHeart,
  faSearch,
  faMapMarkerAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  fasHeart,
  farHeart,
  faSearch,
  faMapMarkerAlt,
  faPhoneAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
