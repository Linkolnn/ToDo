import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Modals from './plugins/modals'

const app = createApp(App)

app.use(Modals)

app.use(router)

app.mount('#app')