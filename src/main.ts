import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { log, wxInit } from '@/libs'

import './assets/css/main.scss'
import 'virtual:uno.css'

log()

const shareData = {
    disabled: true,
    title: '三门县智慧美食地图',
    desc: '鲜甜三门，等你来尝~',
    link: window.location.href,
    imgUrl: 'https://live.zjqq.vip/active/sm-delicious-food-map/img/share.jpg'
}

wxInit(shareData)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
