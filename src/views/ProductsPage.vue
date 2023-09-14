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
    <v-snackbar v-model="addedProduct"
      >Produto adicionado ao carrinho
    </v-snackbar>
  </product-card>
</template>

<script lang="ts">
import items from "@/data/items";
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/store/productsStore";
import BaseInput from "@/components/atoms/BaseInput.vue";
import { Product } from "@/domain/Product";
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
    onBuy(item: Product, quantity: number) {
      this.productsStore.addToCart(item, quantity);
      this.addedProduct = true;
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
