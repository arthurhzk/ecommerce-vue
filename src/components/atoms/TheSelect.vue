<template>
  <div class="text-center">
    <v-select placeholder="State" :states="state"></v-select>
  </div>
</template>
<script>
export default {
  props: {
    states: {
      type: Object,
      required: true,
    },
  },
};
</script>
