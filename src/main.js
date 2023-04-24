import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import {createMetaManager} from "vue-meta";
import LoadScript from "vue-plugin-load-script";



const app = createApp(App)
    app.use(router)
    app.use(createMetaManager())
    app.use(LoadScript)

    await router.isReady()
    app.mount('#app')
