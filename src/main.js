import { createApp } from 'vue'
import App from './App.vue'
import { devtools } from './devtools'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'

createApp(App).use(devtools).use(store).use(router).mount('#app')
