<template>
  <div v-if="item">
    <v-card>
      <v-card-title>
        <span class="headline">{{ item.title }}</span>
      </v-card-title>
    </v-card>
    <img
      :class="{
        'img-default-size': true,
        'img-enlarged-size': imageEnlarged,
      }"
      @mouseover="enlargeImage"
      @mouseout="shrinkImage"
      :src="item.image"
    />
    <v-card-title class="price">R$ {{ item.price.toFixed(2) }}</v-card-title>
    <v-card-subtitle>Quantidade: {{ quantity }}</v-card-subtitle>
    <v-card-title>{{ totalItemValue }}</v-card-title>
    <quantity-button
      @increment="incrementItem()"
      @decrement="decrementItem()"
    ></quantity-button
    ><br />
    <v-text>{{ item.description }}</v-text>
    <the-select :locations="parcelNumbersData"></the-select>
    <the-button :disabled="quantity <= 0" @click="onBuy(item, quantity)"
      >Adicionar ao carrinho</the-button
    >
    <v-snackbar v-model="addedProduct"
      >Produto adicionado ao carrinho
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import axios from "axios";

import QuantityButton from "@/components/atoms/QuantityButton.vue";
import { useProductsStore } from "@/store/productsStore";
import TheButton from "@/components/atoms/TheButton.vue";
import TheSelect from "@/components/atoms/TheSelect.vue";
import parcelNumbers from "@/data/parcelNumbers";
import { Product } from "@/domain/Product";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      quantity: 1,
      addedProduct: false,
      noProduct: true,
      parcelNumbers: parcelNumbers,
      imageEnlarged: false,
      item: undefined as Product | undefined,
    };
  },
  components: {
    QuantityButton,
    TheButton,
    TheSelect,
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  computed: {
    parcelNumbersData() {
      const totalValue = this.quantity * this.itemPrice;
      const interestRate = 0.05;
      return this.parcelNumbers.map((parcel) => {
        if (parcel < 4) {
          return `${parcel}x de R$ ${(totalValue / parcel).toFixed(
            2
          )} sem juros`;
        }
        return `${parcel}x de R$ ${(
          (totalValue / parcel) *
          (1 + interestRate)
        ).toFixed(2)}`;
      });
    },
    itemPrice() {
      return this.item?.price || 0;
    },
    totalItemValue() {
      const totalValue = this.quantity * this.itemPrice;
      const totalValueWithDiscount = totalValue - totalValue * 0.1;

      return `Valor total da compra à vista com 10% de desconto no pix: R$ ${totalValueWithDiscount.toFixed(
        2
      )}`;
    },
  },
  methods: {
    incrementItem() {
      this.quantity++;
      this.noProduct = true;
    },
    decrementItem() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    onBuy(item: Product, quantity: number) {
      this.productsStore.addToCart(item, quantity);
      this.addedProduct = true;
      this.quantity = 0;
    },
    enlargeImage() {
      console.log("enlarged");
      this.imageEnlarged = true;
    },
    shrinkImage() {
      this.imageEnlarged = false;
    },
    getApiData() {
      const apiUrl = `http://localhost:3000/api/items/${this.$route.params.id}`;
      axios.get(apiUrl).then((response: any) => {
        this.item = response.data;
      });
    },
  },
  mounted() {
    this.getApiData();
  },
};
</script>
<style>
.img-default-size {
  height: 200px;
  transition: all 0.2s;
}

.img-enlarged-size {
  height: 400px;
  transition: all 0.2s;
  cursor: zoom-in;
}
</style>
