<template>
  <v-btn>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "TheButton",
};
</script>

<style>
button:disabled {
  cursor: not-allowed;
}
</style>
