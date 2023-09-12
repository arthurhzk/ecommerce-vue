<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <img :src="item.image" />
    <p>Valor do produto R$ {{ item.price }}</p>
    <p>Quantidade: {{ quantity }}</p>
    <quantity-button
      @increment="incrementItem()"
      @decrement="decrementItem()"
    ></quantity-button>
    <p>{{ item.description }}</p>
    <the-button @click="onBuy(item, quantity)"
      >Adicionar ao carrinho</the-button
    >
    <v-snackbar v-model="addedProduct"
      >Produto adicionado ao carrinho
    </v-snackbar>
  </div>
</template>

<script>
import items from "@/data/items.js";
import QuantityButton from "@/components/atoms/QuantityButton.vue";
import { useProductsStore } from "@/store/productsStore.js";
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      item: items.find((item) => item.id == this.$route.params.id),
      quantity: 0,
      addedProduct: false,
    };
  },
  components: {
    QuantityButton,
    TheButton,
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  methods: {
    incrementItem() {
      this.quantity++;
      this.totalItems();
    },
    decrementItem() {
      if (this.quantity > 0) {
        this.quantity--;
        this.totalItems;
      }
    },
    totalItems() {
      this.total = this.productsStore.purchasedItems.reduce(
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
    },
    onBuy(item, quantity) {
      this.productsStore.addToCart(item, quantity);
      item.addedProduct = true;
    },
  },
};
</script>
