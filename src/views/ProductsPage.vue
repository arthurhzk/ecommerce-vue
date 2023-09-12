<template>
  <v-text-field
    v-model="inputValue"
    label="Pequise aqui o seu produto"
  ></v-text-field>
  <p v-if="!searchItems.length">{{ emptySearch }}</p>
  <product-card
    v-for="item in searchItems"
    :key="item.id"
    :data="item"
    @buy="(quantity) => onBuy(item, quantity)"
  >
    <p v-if="item.addedToCart">Produto adicionado ao carrinho</p>
  </product-card>
</template>

<script>
import items from "@/data/items.js";
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/store/productsStore.js";
import BaseInput from "@/components/atoms/BaseInput.vue";
export default {
  data() {
    return {
      items: items,
      inputValue: "",
      emptySearch: "Não foi possível localizar o seu produto",
      addedProduct: false,
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  components: { ProductCard, BaseInput },
  methods: {
    onBuy(item, quantity) {
      this.productsStore.addToCart(item, quantity);
      item.addedToCart = true;
      setTimeout(() => {
        item.addedToCart = false;
      }, 5000);
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
