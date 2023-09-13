<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <img :src="item.image" />
    <p>Valor do produto R$ {{ item.price }}</p>
    <p>
      Valor do produto à vista no Pix com 10% de desconto R$ {{ pixTotalValue }}
    </p>
    <p>Ou em 12x de R$ {{ parceledValue }}</p>
    <p>Quantidade: {{ quantity }}</p>

    <quantity-button
      @increment="incrementItem()"
      @decrement="decrementItem()"
    ></quantity-button>
    <p>{{ item.description }}</p>
    <the-button :disabled="quantity <= 0" @click="onBuy(item, quantity)"
      >Adicionar ao carrinho</the-button
    >
    <v-snackbar v-model="item.addedProduct"
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
  computed: {
    pixTotalValue() {
      return this.item.price - this.item.price * 0.1;
    },
    parceledValue() {
      const valueFixed = this.item.price / 12 + 0.2;
      return valueFixed.toFixed(2);
    },
  },
  methods: {
    incrementItem() {
      this.quantity++;
      this.totalItems();
    },
    decrementItem() {
      if (this.quantity > 0) {
        this.quantity--;
        this.totalItems();
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
      this.quantity = 0;
    },
  },
};
</script>
