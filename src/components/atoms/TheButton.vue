<template>
  <button
    class="blue"
    :class="{
      red: variant === 'red',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
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
.blue {
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
button:disabled {
  background-color: gray;
  cursor: default;
}
</style>
