<template>
  <div>
    <h1>Cart</h1>
    <div v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
      <p>Valor: R$ {{ item.price.toFixed(2) }}</p>
      <p>Quantidade: {{ item.quantity }}</p>
      <quantity-button
        @increment="incrementItem(item)"
        @decrement="decrementItem(item)"
      ></quantity-button>
      <the-button @click="deleteItem(index)">X</the-button>
    </div>
    <p v-if="total === 0">{{ cartEmptyMessage }}</p>
    <p v-else>Valor total a pagar R$ {{ total.toFixed(2) }}</p>
  </div>
  <the-select
    v-if="conditionToAppear"
    :locations="parcelNumbersData"
  ></the-select>
  <the-button @click="checkoutComplete" :disabled="total === 0">
    Finalizar compra
  </the-button>
</template>

<script>
import { useProductsStore } from "@/store/productsStore.js";
import TheButton from "@/components/atoms/TheButton.vue";
import QuantityButton from "@/components/atoms/QuantityButton.vue";
import TheSelect from "@/components/atoms/TheSelect.vue";
import parcelNumbers from "@/data/parcelNumbers.js";

export default {
  data() {
    return {
      total: 0,
      cartEmptyMessage: "O seu carrinho está vazio!",
      parcelNumbers: parcelNumbers,
      conditionToAppear: true,
    };
  },
  computed: {
    parcelNumbersData() {
      return this.parcelNumbers.map((parcel) => {
        if (parcel < 4) {
          return `${parcel}x de R$ ${(this.total / parcel).toFixed(
            2
          )} sem juros`;
        } else {
          const interestRate = 0.05;
          return `${parcel}x de R$ ${(
            (this.total / parcel) *
            (1 + interestRate)
          ).toFixed(2)}`;
        }
      });
    },
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
        (accumulator, item) => accumulator + item.price * item.quantity,
        0
      );
    },
    checkoutComplete() {
      this.$router.push("/thank-you");
      this.productsStore.clearCart();
    },
    incrementItem(item) {
      item.quantity++;
      this.totalItems();
    },
    decrementItem(item) {
      if (item.quantity > 0) {
        item.quantity--;
        this.totalItems();
      }
      if (item.quantity < 1) {
        this.deleteItem(item);
        this.conditionToAppear = false;
      }
    },
  },

  components: {
    TheButton,
    QuantityButton,
    TheSelect,
  },
};
</script>
