<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>{{ item.price }}</p>
      <the-button variant="red" @click="deleteItem(index)">X</the-button>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "@/store/productsStore.js";
import TheButton from "@/components/atoms/TheButton.vue";

export default {
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  methods: {
    deleteItem(index) {
      this.productsStore.purchasedItems.splice(index, 1);
    },
  },
  components: {
    TheButton,
  },
};
</script>
