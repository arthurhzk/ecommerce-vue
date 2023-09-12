import { createRouter, createWebHistory } from "vue-router";
import ProductsPage from "@/views/ProductsPage.vue";
import CartPage from "@/views/CartPage.vue";
import ThankYouPage from "@/views/ThankYouPage.vue";
import FormPage from "@/views/FormPage.vue";
import ProductDetailPage from "@/views/ProductDetailPage.vue";
const routes = [
  {
    path: "/",
    component: ProductsPage,
  },
  {
    path: "/:id",
    component: ProductDetailPage,
  },
  {
    path: "/cart",
    component: CartPage,
  },
  {
    path: "/thank-you",
    component: ThankYouPage,
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
