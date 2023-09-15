<template>
  <v-text-field
    v-model="inputValue"
    label="Pequise aqui o seu produto"
  ></v-text-field>

  <the-button @click="searchByAlphabeticalOrder">Ordenar produtos</the-button>
  <the-button @click="searchByHighestPrice">Maior preço</the-button>
  <the-button @click="searchByLowestPrice">Menor preço</the-button>
  <the-button @click="searchByRating">Rating</the-button>
  <p v-if="!searchItems.length">{{ emptySearch }}</p>
  <div class="d-flex flex-wrap justify-center">
    <product-card
      v-for="item in searchItems"
      :key="item.id"
      :data="item"
      @buy="(quantity) => onBuy(item, quantity)"
      class="mx-2 mb-3"
    >
      <v-snackbar v-model="addedProduct"
        >Produto adicionado ao carrinho</v-snackbar
      >
    </product-card>
  </div>
</template>

<script lang="ts">
import items from "@/data/items";
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/store/productsStore";
import BaseInput from "@/components/atoms/BaseInput.vue";
import { Product } from "@/domain/Product";
import TheSelect from "@/components/atoms/TheSelect.vue";
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  data() {
    return {
      items: items,
      inputValue: "",
      emptySearch: "Não foi possível localizar o seu produto",
      addedProduct: false,
      searchForCategory: [
        "Pesquisar por ordem alfabética",
        "Maior preço",
        "Menor preço",
        "Melhor avaliado",
      ],
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  components: { ProductCard, BaseInput, TheSelect, TheButton },
  methods: {
    onBuy(item: Product, quantity: number) {
      this.productsStore.addToCart(item, quantity);
      this.addedProduct = true;
    },
    searchByAlphabeticalOrder() {
      this.items.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    },
    searchByHighestPrice() {
      this.items.sort((a, b) => {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        return 0;
      });
    },
    searchByLowestPrice() {
      this.items.sort((a, b) => {
        if (a.price < b.price) return -1;
        else if (a.price > b.price) return 1;
        return 0;
      });
    },
    searchByRating() {
      this.items.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        else if (a.rating < b.rating) return 1;
        return 0;
      });
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
