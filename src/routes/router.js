import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "@/views/ProductsPage.vue";
import CartPage from "@/views/CartPage.vue";
import ThankYou from "@/views/ThankYou.vue";
const routes = [
  {
    path: "/",
    component: ProductsPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/thank-you",
    component: ThankYou,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
