<template>
  <div>
    <h1>Agradecemos pela sua compra!</h1>
    <p>Detalhes do Pedido:</p>
    <div v-for="(item, index) in productsStore.addedCartItems" :key="index">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>Valor: R$ {{ item.price }}</p>
      <p>Quantidade: {{ item.quantity }}</p>
    </div>
    <p>Valor total da compra R$ {{ total }}</p>
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
  computed: {
    total() {
      return this.productsStore.addedCartItems.reduce(
        (acc, item) => acc + item.price * item.quantity + this.total,
        0
      );
    },
  },
};
</script>

<style scoped></style>
