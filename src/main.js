import './assets/main.css'
import vueVimeoPlayer from 'vue-vimeo-player'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(vueVimeoPlayer)
app.mount('#app')
