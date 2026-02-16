import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/main.css'

const pinia = createPinia()

const app = createApp(App)

app.mount('#app')

app.use(pinia)
