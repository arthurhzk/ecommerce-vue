<template>
  <div v-if="item">
    <h1>{{ item.title }}</h1>
    <img
      :class="{
        'img-default-size': true,
        'img-enlarged-size': imageEnlarged,
      }"
      @mouseover="enlargeImage"
      @mouseout="shrinkImage"
      :src="$options.imageSource"
    />
    <p>Valor do produto R$ {{ item.price.toFixed(2) }}</p>

    <p>{{ parceledValue }}</p>
    <p>Quantidade: {{ quantity }}</p>
    <h3>{{ totalItemValue }}</h3>
    <quantity-button
      @increment="incrementItem()"
      @decrement="decrementItem()"
    ></quantity-button>
    <p>{{ item.description }}</p>
    <the-select :locations="parcelNumbersData"></the-select>
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
import TheSelect from "@/components/atoms/TheSelect.vue";
import parcelNumbers from "@/data/parcelNumbers.js";
export default {
  name: "ProductDetailPage",
  data() {
    return {
      item: items.find((item) => item.id == this.$route.params.id),
      quantity: 1,
      addedProduct: false,
      noProduct: true,
      parcelNumbers: parcelNumbers,
      imageEnlarged: false,
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
      const totalValue = this.quantity * this.item.price;

      return this.parcelNumbers.map((parcel) => {
        if (parcel < 4) {
          return `${parcel}x de R$ ${(totalValue / parcel).toFixed(
            2
          )} sem juros`;
        } else {
          const interestRate = 0.05;
          return `${parcel}x de R$ ${(
            (totalValue / parcel) *
            (1 + interestRate)
          ).toFixed(2)}`;
        }
      });
    },

    totalItemValue() {
      const totalValue = this.quantity * this.item.price;
      const totalValueWithDiscount = totalValue - totalValue * 0.1;

      return `Valor total da compra à vista com 10% de desconto no pix: R$ ${totalValueWithDiscount.toFixed(
        2
      )}`;
    },
  },
  methods: {
    incrementItem() {
      this.quantity++;
      this.totalItems();
      this.noProduct = true;
    },
    decrementItem() {
      if (this.quantity > 1) {
        this.quantity--;
        this.totalItems();
      }
    },
    onBuy(item, quantity) {
      this.productsStore.addToCart(item, quantity);
      item.addedProduct = true;
      this.quantity = 0;
    },
    enlargeImage() {
      console.log("enlarged");
      this.imageEnlarged = true;
    },
    shrinkImage() {
      this.imageEnlarged = false;
    },
  },
  created() {
    this.$options.imageSource = this.item.image;
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
