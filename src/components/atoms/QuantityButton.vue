<template>
  <button @click="incrementItem">-</button>
  <button @click="decrementItem">+</button>
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
