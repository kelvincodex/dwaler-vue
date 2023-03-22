import pageRoute from "./routes/page-route.js";
import {createRouter, createWebHistory} from "vue-router";
import bookingRoute from "./routes/booking-route.js";


const BaseRoute = []

const routes = BaseRoute.concat(pageRoute,bookingRoute)

const router = createRouter({
    history:createWebHistory(),
    routes
})

// await router.isReady()
export default router