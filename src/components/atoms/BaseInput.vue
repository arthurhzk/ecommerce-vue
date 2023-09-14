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

<script lang="ts">
export default {
  emits: ["input"],
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
    updateValue(event: Event) {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        this.$emit("input", target.value);
      }
    },
  },
};
</script>
