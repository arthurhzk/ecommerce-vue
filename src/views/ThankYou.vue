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
  mounted() {
    this.totalItems();
    setTimeout(() => {
      this.$router.push({
        path: "/",
      });
    }, 8000);
  },
  methods: {
    totalItems() {
      this.total = this.productsStore.addedCartItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
    },
  },
};
</script>

<style scoped></style>
