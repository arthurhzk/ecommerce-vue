<template>
  <button class="the-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
};
</script>
<style>
.the-button {
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
</style>
