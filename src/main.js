import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerGlobalLayouts } from '@/utils/registerGlobalLayouts'
import piniaPersist from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

registerGlobalLayouts(app)
app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
