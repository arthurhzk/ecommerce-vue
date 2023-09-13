<template>
  <h1>{{ data.title }}</h1>
  <router-link :to="`/${data.id}`">
    <img :src="data.image" alt="" />
  </router-link>
  <p>R$ {{ data.price.toFixed(2) }}</p>
  <quantity-button
    @increment="incrementItem"
    @decrement="decrementItem"
  ></quantity-button>
  <p>{{ quantityValue }}</p>
  <the-button :disabled="!quantityValue" @click="onButtonClick"
    >Comprar</the-button
  >
  <slot></slot>
</template>
<script>
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
      this.quantityValue = null;
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
