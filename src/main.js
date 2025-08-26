import './styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerGlobalLayouts } from "@/utils/registerGlobalLayouts";

const app = createApp(App)

registerGlobalLayouts(app);

app.use(createPinia())
app.use(router)

app.mount('#app')

