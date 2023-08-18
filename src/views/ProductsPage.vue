<template>
  <product-card
    v-for="(item, index) in items"
    :key="item.id"
    :data="item"
    @buy="onBuy(item)"
  >
  </product-card>
</template>

<script>
import items from "@/data/items.js";
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/store/productsStore.js";
export default {
  data() {
    return {
      items: items,
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  components: { ProductCard },
  methods: {
    onBuy(item) {
      const verify = this.productsStore.purchasedItems.push(item);

      if (verify) {
        alert("Item adicionado ao carrinho!");
      }
    },
  },
};
</script>
