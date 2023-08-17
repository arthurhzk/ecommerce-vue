<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.price }}</p>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/store/productsStore.js";
export default {
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
};
</script>
