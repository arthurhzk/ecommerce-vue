<template>
  <form @submit.prevent="submitForm">
    <base-input
      :required="true"
      v-for="(field, index) in formFields"
      :key="index"
      :label="field.label"
      :type="field.type"
      @input="onInput(index, $event)"
      v-model="field.value"
    ></base-input>
    <the-select
      required
      v-model="selectedLocation"
      :locations="fieldStates"
    ></the-select>
    <the-button type="submit">Cadastrar</the-button>
    <p style="color: green">{{ accountCreationMessage }}</p>
    <p style="color: red">{{ passwordMismatchMessage }}</p>
    <p style="color: red">{{ passwordLengthMessage }}</p>
  </form>
</template>

<script lang="ts">
import BaseInput from "@/components/atoms/BaseInput.vue";
import TheButton from "@/components/atoms/TheButton.vue";
import TheSelect from "@/components/atoms/TheSelect.vue";
import formFields from "@/data/formFields";
import fieldStates from "@/data/fieldStates";

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
      fieldStates: fieldStates,
      selectedLocation: null,
      checkPassword: false,
      signAccount: false,
      checkPasswordLength: false,
    };
  },
  computed: {
    passwordMismatchMessage() {
      return this.checkPassword ? "As senhas não conferem" : "";
    },
    accountCreationMessage() {
      return this.signAccount ? "Conta criada com sucesso!" : "";
    },
    passwordLengthMessage() {
      return this.checkPasswordLength ? "No mínimo 6 caracteres" : "";
    },
  },
  methods: {
    onInput(index: number, event: string) {
      let field = this.formFields[index];
      field.value = event;
    },
    submitForm() {
      const passwordField1 = this.formFields[3].value;
      const passwordField2 = this.formFields[4].value;
      const passwordLength = 6;

      if (
        passwordField1.length < passwordLength ||
        passwordField2.length < passwordLength
      ) {
        this.checkPasswordLength = true;
      } else if (passwordField1 !== passwordField2) {
        this.checkPassword = true;
      } else {
        for (const field of this.formFields) {
          console.log(`${field.label} input value:`, field.value);
        }
        console.log("Selected state:", this.selectedLocation);
        this.checkPassword = false;
        this.checkPasswordLength = false;
        this.signAccount = true;
        setTimeout(() => {
          this.signAccount = false;
        }, 3000);
      }
    },
  },
};
</script>
