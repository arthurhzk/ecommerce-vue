<template>
  <label :for="labelFor">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "TheLabel",
  props: {
    labelFor: String,
  },
};
</script>
