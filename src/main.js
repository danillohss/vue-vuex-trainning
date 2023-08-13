import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const Vue = createApp(App)
Vue.use(store).mount('#app')
