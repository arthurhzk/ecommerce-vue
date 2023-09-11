<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>Valor: R$ {{ item.price }}</p>
      <p>Quantidade: {{ item.quantity }}</p>
      <the-button variant="red" @click="deleteItem(index)">X</the-button>
    </div>
    <p v-if="total == 0">{{ cartEmptyMessage }}</p>
    <p v-else>Valor total a pagar R$ {{ total }}</p>
    <p></p>
  </div>
  <the-button
    @checkout="checkoutComplete"
    :disabled="!total"
    variant="blue-button"
    >Finalizar compra</the-button
  >
</template>

<script>
import { useProductsStore } from "@/store/productsStore.js";
import TheButton from "@/components/atoms/TheButton.vue";

export default {
  data() {
    return {
      total: 0,
      cartEmptyMessage: "O seu carrinho está vazio!",
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  mounted() {
    this.totalItems();
  },
  methods: {
    deleteItem(index) {
      this.productsStore.purchasedItems.splice(index, 1);
      this.totalItems();
    },
    totalItems() {
      this.total = this.productsStore.purchasedItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    checkoutComplete() {
      this.productsStore.clearCart();
      this.$router.push({
        path: "/thank-you",
      });
    },
  },
  components: {
    TheButton,
  },
};
</script>
