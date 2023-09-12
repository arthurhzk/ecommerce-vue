<template>
  <v-btn>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    variant: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
button:disabled {
  cursor: not-allowed;
}
</style>
