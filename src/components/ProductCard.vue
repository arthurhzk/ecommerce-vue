<template>
  <h1>{{ data.title }}</h1>
  <img :src="data.image" alt="" />
  <p>R$ {{ data.price }}</p>
  <input type="number" :value="data.qty" />
  <the-button @click="onButtonClick">Comprar</the-button>
</template>

<script>
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  emits: ["buy"],
  components: {
    TheButton,
  },
  methods: {
    onButtonClick() {
      this.$emit("buy");
    },
  },
};
</script>
