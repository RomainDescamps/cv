import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/global.css";


createApp(App).use(store).use(router).use(createPinia()).mount('#app')
