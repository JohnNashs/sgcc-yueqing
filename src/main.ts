import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { log } from '@/libs'

import './assets/css/main.scss'
import 'virtual:uno.css'
import type { IShareData } from '@/libs/utils'

log()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
