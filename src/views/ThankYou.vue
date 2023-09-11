<template>
  <div>
    <h1>Agradecemos pela sua compra!</h1>
    <p>Detalhes do Pedido:</p>
    <div v-for="(product, index) in productsStore.addedCartItems" :key="index">
      <img :src="product.image" alt="" />
      <p>{{ product.title }}</p>
      <p>Valor: R$ {{ product.price }}</p>
      <p>Quantidade: {{ product.quantity }}</p>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/store/productsStore.js";
export default {
  data() {
    return {
      total: 0,
    };
  },
  setup() {
    const productsStore = useProductsStore();

    return { productsStore };
  },
  mounted() {
    setTimeout(() => {
      this.$router.push({
        path: "/",
      });
    }, 8000);
  },
};
</script>

<style scoped></style>
