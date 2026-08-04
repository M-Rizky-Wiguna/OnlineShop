import { createRouter, createWebHistory } from "vue-router"
import LandingPage from "../pages/LandingPage.vue"
import ProductPage from "../pages/ProductPage.vue"
import AboutPage from "../pages/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/about", component: AboutPage },
    {path : "/products", component: ProductPage} 
  ],
})
export default router;
