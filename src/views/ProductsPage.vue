<template>
  <input type="text" placeholder="pesquise aqui" v-model="inputValue" />
  <p v-if="!searchItems.length">{{ emptySearch }}</p>
  <product-card
    v-for="item in searchItems"
    :key="item.id"
    :data="item"
    @buy="(quantity) => onBuy(item, quantity)"
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
      inputValue: "",
      emptySearch: "Não foi possível localizar o seu produto",
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  components: { ProductCard },
  methods: {
    onBuy(item, quantity) {
      this.productsStore.addToCart(item, quantity);
    },
  },
  computed: {
    searchItems() {
      if (!this.inputValue) return this.items;
      return this.items.filter((item) => {
        return item.title.toLowerCase().includes(this.inputValue.toLowerCase());
      });
    },
  },
};
</script>
