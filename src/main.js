import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import {createMetaManager} from "vue-meta";


const app = createApp(App)
    app.use(router)
    app.use(createMetaManager())
    app.mount('#app')
