import { createApp } from 'vue'
import App from './App.vue'
import { log } from '@/libs'

import './assets/css/main.scss'
import 'virtual:uno.css'

log()

const app = createApp(App)

app.mount('#app')
