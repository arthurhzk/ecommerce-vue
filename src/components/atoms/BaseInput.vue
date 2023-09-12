<template>
  <div>
    <label>{{ label }}</label>
    <v-text-field
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
  },
  methods: {
    updateValue(event) {
      this.$emit(event.target.value);
    },
  },
};
</script>
