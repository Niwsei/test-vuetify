import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './index.css'
import { createPinia } from 'pinia';

const pinia = createPinia();







loadFonts()

createApp(App)
    .use(router)
    .use(pinia)
    .use(vuetify)
    .mount('#app')
