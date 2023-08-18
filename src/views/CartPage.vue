<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>{{ item.price }}</p>
      <p>{{ item.qty }}</p>
      <the-button variant="red" @click="deleteItem(index)">X</the-button>
    </div>
    <p v-if="total == 0">{{ cartEmptyMessage }}</p>
    <p v-else>R${{ total }}</p>
  </div>
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
        (acc, item) => acc + item.price * item.qty,
        0
      );
    },
  },
  components: {
    TheButton,
  },
};
</script>
