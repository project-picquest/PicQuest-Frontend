import '@/assets/main.css'
import { createApp } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import { useKakao } from 'vue3-kakao-maps'
const { VITE_KAKAO_API_KEY } = import.meta.env;


import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

useKakao(VITE_KAKAO_API_KEY)
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
