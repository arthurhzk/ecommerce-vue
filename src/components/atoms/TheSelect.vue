<template>
  <v-select
    :required="required"
    @input="updateValue($event)"
    label="Select"
    :items="locations"
  ></v-select>
</template>
<script lang="ts">
export default {
  emits: ["input"],
  props: {
    locations: {
      type: Array,
    },
    required: {
      type: Boolean,
    },
  },
  methods: {
    updateValue(event: Event) {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        this.$emit("input", target.value);
      }
    },
  },
};
</script>
