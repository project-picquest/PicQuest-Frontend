import '@/assets/main.css'
import { createApp } from 'vue'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import router from './router'

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
