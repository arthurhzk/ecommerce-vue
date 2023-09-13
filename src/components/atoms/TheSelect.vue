<template>
  <v-select
    :required="required"
    @input="updateValue($event)"
    label="Select"
    :items="locations"
  ></v-select>
</template>
<script>
emits: ["input"];
export default {
  props: {
    locations: {
      type: Array,
    },
    required: {
      type: Boolean,
    },
    parcels: {
      type: Array,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit(event.target.value);
    },
  },
};
</script>
