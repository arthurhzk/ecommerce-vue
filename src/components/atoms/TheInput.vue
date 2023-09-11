<template>
  <div>
    <input :type="type" :value="value" @input="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    value: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
