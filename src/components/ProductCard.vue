<template>
  <v-card class="my-4" max-width="374">
    <v-card-title class="text-h6">{{ data.title }}</v-card-title>
    <router-link :to="`/${data.id}`">
      <v-img cover height="220" width="300" :src="data.image"></v-img>
    </router-link>
    <div class="my-2">
      <p class="text-h5 font-weight-bold">R$ {{ data.price.toFixed(2) }}</p>
    </div>

    <div class="text-grey ms-4">Rating: {{ data.rating }}</div>

    <div class="d-flex align-center my-2">
      <quantity-button
        @increment="incrementItem"
        @decrement="decrementItem"
      ></quantity-button>
      <the-button :disabled="!quantityValue" @click="onButtonClick"
        >Comprar</the-button
      >

      <p class="mx-2">Quantidade: {{ quantityValue }}</p>
    </div>
    <slot></slot>
  </v-card>
</template>

<script lang="ts">
import TheButton from "@/components/atoms/TheButton.vue";
import QuantityButton from "@/components/atoms/QuantityButton.vue";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantityValue: 0,
    };
  },
  emits: ["buy"],
  components: {
    TheButton,
    QuantityButton,
  },
  methods: {
    onButtonClick() {
      this.$emit("buy", this.quantityValue);
      this.quantityValue = 0;
    },
    incrementItem() {
      this.quantityValue++;
    },
    decrementItem() {
      if (this.quantityValue > 0) {
        this.quantityValue--;
      }
    },
  },
};
</script>
