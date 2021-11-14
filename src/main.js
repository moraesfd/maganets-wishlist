import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import './assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faSearch,
  faMapMarkerAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle as farTimesSearch } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart,
  faSearch,
  faMapMarkerAlt,
  faPhoneAlt,
  farTimesSearch
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
