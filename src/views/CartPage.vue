<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title>Carrinho</v-card-title>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-row v-for="(item, index) in productsStore.purchasedItems" :key="item.id">
      <v-col cols="4">
        <img :src="item.image" alt="" width="200" height="150" />
      </v-col>
      <v-col cols="4">
        <v-card-title>{{ item.title }}</v-card-title>
        <p>Valor: R$ {{ item.price.toFixed(2) }}</p>
        <p>Quantidade: {{ item.quantity }}</p>
        <quantity-button
          @increment="incrementItem(item)"
          @decrement="decrementItem(item, index)"
        ></quantity-button>
      </v-col>
      <v-col cols="4">
        <the-button @click="deleteItem(index)">X</the-button>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <the-select
          label="Parcelas"
          v-if="conditionToAppear"
          :locations="parcelNumbersData"
          v-model="selectedParcel"
        ></the-select>
        <div>
          <radio-input
            v-if="conditionToAppear"
            @click="conditionToAppearOnPix = !conditionToAppearOnPix"
            label="À vista no pix"
            value="pix"
            color="blue"
            :selectedValue="selectedPaymentMethod"
          ></radio-input>
        </div>

        <p v-if="total === 0">
          {{ cartEmptyMessage }}
        </p>

        <p v-else>{{ selectedParcel }}</p>
        <div
          v-if="
            selectedPaymentMethod === 'pix' && conditionToAppearOnPix === true
          "
        >
          <p v-if="conditionToAppear">
            Valor total com desconto (pix): R$ {{ discountWithPix }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <the-button @click="checkoutComplete" :disabled="isButtonDisabled">
          Finalizar compra
        </the-button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { useProductsStore } from "@/store/productsStore";
import TheButton from "@/components/atoms/TheButton.vue";
import QuantityButton from "@/components/atoms/QuantityButton.vue";
import TheSelect from "@/components/atoms/TheSelect.vue";
import parcelNumbers from "@/data/parcelNumbers";
import { Product } from "@/domain/Product";
import RadioInput from "@/components/atoms/RadioInput.vue";
export default {
  data() {
    return {
      total: 0,
      cartEmptyMessage: "O seu carrinho está vazio!",
      parcelNumbers: parcelNumbers,
      conditionToAppear: false,
      selectedParcel: null as number | null,
      selectedPaymentMethod: "pix",
      discountPercentage: 10,
      conditionToAppearOnPix: false,
    };
  },
  computed: {
    parcelNumbersData(): string[] {
      const totalValue = this.total;
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

    isButtonDisabled(): boolean {
      return (
        this.total === 0 ||
        this.selectedParcel === null ||
        this.selectedPaymentMethod === null
      );
    },
    discountWithPix(): void | number {
      if (this.selectedPaymentMethod === "pix" && this.total > 0) {
        return this.total - (this.total * this.discountPercentage) / 100;
      }
    },
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  mounted() {
    this.totalItems();
    if (this.total > 0) {
      this.conditionToAppear = true;
    }
  },
  methods: {
    deleteItem(index: number): void {
      this.productsStore.purchasedItems.splice(index, 1);
      this.totalItems();
      if (this.productsStore.purchasedItems.length === 0) {
        this.conditionToAppear = false;
      }
    },
    totalItems(): number {
      this.total = this.productsStore.purchasedItems.reduce(
        (accumulator: number, item: Product) =>
          accumulator + item.price * (item.quantity || 0),
        0
      );
      return this.total;
    },
    checkoutComplete() {
      this.$router.push("/thank-you");
      this.productsStore.clearCart();
    },
    incrementItem(item: Product) {
      const quantity = item.quantity || 0;
      item.quantity = quantity + 1;
      this.totalItems();
    },
    decrementItem(item: Product, index: number) {
      if (item.quantity && item.quantity > 0) {
        item.quantity--;
        this.totalItems();
      }
      if (item.quantity === 0) {
        this.deleteItem(index);
        this.conditionToAppear = false;
      }
    },
  },

  components: {
    TheButton,
    QuantityButton,
    TheSelect,
    RadioInput,
  },
};
</script>
