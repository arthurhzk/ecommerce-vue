<template>
  <div>
    <label for="">{{ label }}</label>
    <v-text-field
      :type="type"
      :placeholder="label"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
