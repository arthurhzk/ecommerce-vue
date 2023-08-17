<template>
  <button
    class="blue-button"
    :class="{
      red: variant === 'red',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ["delete"],
  name: "TheButton",
  props: {
    variant: {
      type: String,
      default: "red",
    },
  },
};
</script>
<style>
.blue-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  border: none;
}

.red {
  display: inline-block;
  background-color: #dc3545;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  border: none;
}
</style>
