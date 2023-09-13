<template>
  <div class="text-center">
    <v-select v-model="location" :items="locations" label="State"></v-select>
    <v-menu :location="location"> </v-menu>
  </div>
</template>
<script>
export default {
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
};
</script>
