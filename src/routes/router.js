import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "@/views/ProductsPage.vue";
import CartPage from "@/views/CartPage.vue";
import ThankYou from "@/views/ThankYou.vue";
import FormPage from "@/views/FormPage.vue";
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
  {
    path: "/sign-in",
    component: FormPage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
