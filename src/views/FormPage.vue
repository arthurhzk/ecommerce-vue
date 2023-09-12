<template>
  <form @submit.prevent="submitForm">
    <base-input label="Name" type="text" @input="onNameInput"></base-input>
    <base-input
      label="Last Name"
      type="text"
      @input="onLastNameInput"
    ></base-input>
    <base-input label="Email" type="email" @input="onEmailInput"></base-input>
    <base-input
      label="Password"
      type="password"
      @input="onPasswordInput"
    ></base-input>
    <base-input label="City" type="text" @input="onCityInput"></base-input>

    <the-button @click="submitForm($event)">Cadastrar</the-button>
  </form>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput.vue";
import TheButton from "@/components/atoms/TheButton.vue";
export default {
  name: "FormPage",
  components: {
    BaseInput,
    TheButton,
  },
  data() {
    return {
      event: {
        name: "",
        lastName: "",
        city: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onNameInput(event) {
      console.log("Name input value:", event.target.value);
    },
    onLastNameInput(event) {
      console.log("Last Name input value:", event.target.value);
    },
    onCityInput(event) {
      console.log("City input value:", event.target.value);
    },
    onPasswordInput(event) {
      console.log("Password input value:", event.target.value);
    },
    onEmailInput(event) {
      console.log("Email input value:", event.target.value);
    },
    submitForm() {
      console.log("Name input value:", this.event.name);
      console.log("Last Name input value:", this.event.lastName);
      console.log("City input value:", this.event.city);
      console.log("Password input value:", this.event.password);
      console.log("Email input value:", this.event.email);
    },
  },
};
</script>
