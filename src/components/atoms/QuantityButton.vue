<template>
  <v-btn @click="incrementItem">+</v-btn>
  <v-btn @click="decrementItem">-</v-btn>
</template>

<script>
export default {
  emits: ["increment", "decrement"],
  methods: {
    incrementItem() {
      this.$emit("increment");
    },
    decrementItem() {
      this.$emit("decrement");
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
