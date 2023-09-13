<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field
      :required="required"
      :type="type"
      :placeholder="label"
      @input="updateValue($event)"
    />
  </div>
</template>

<script>
emits: ["input"];
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
