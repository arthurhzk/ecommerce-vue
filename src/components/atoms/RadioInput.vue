<template>
  <v-radio-group :v-model="selectedValue">
    <v-radio :color="color" :label="label" :value="value"></v-radio>
  </v-radio-group>
</template>

<script lang="ts">
export default {
  name: "RadioInput",
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    selectedValue: {
      type: String,
      required: true,
    },
  },
};
</script>
