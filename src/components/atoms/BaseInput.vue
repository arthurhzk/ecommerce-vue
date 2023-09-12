<template>
  <div>
    <label for="">{{ label }}</label>
    <v-text-field
      :type="type"
      :placeholder="label"
      @input="updateValue($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
