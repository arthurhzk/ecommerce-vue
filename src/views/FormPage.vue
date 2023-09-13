<template>
  <form @submit.prevent="submitForm">
    <base-input
      v-for="(field, index) in formFields"
      :key="index"
      :label="field.label"
      :type="field.type"
      @input="onInput(index, $event)"
      v-model="field.value"
    ></base-input>
    <the-select></the-select>
    <the-button type="submit">Cadastrar</the-button>
  </form>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput.vue";
import TheButton from "@/components/atoms/TheButton.vue";
import TheSelect from "@/components/atoms/TheSelect.vue";
import formFields from "@/data/formFields";
export default {
  name: "FormPage",
  components: {
    BaseInput,
    TheButton,
    TheSelect,
  },
  data() {
    return {
      formFields: formFields,
    };
  },
  methods: {
    onInput(index, event) {
      this.formFields[index].value = event.target.value;
    },
    submitForm() {
      for (const field of this.formFields) {
        console.log(`${field.label} input value:`, field.value);
      }
    },
  },
};
</script>
