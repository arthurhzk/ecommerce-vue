<template>
  <form>
    <base-input @input="onNameInput" label="Name" type="text"></base-input>
    <base-input
      v-model="event.lastName"
      label="Last Name"
      type="text"
      @input="onLastNameInput"
    ></base-input>
    <base-input @input="onCityInput" label="City" type="text"></base-input>
    <base-input
      v-model="event.password"
      label="Password"
      type="password"
      @input="onPasswordInput"
    ></base-input>
    <base-input @input="onEmailInput" label="Email" type="email"></base-input>
  </form>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput.vue";
export default {
  name: "FormPage",
  components: {
    BaseInput,
  },
  data() {
    return {
      event: {
        name: "",
        lastName: "",
        city: "",
        email: "",
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
  },
};
</script>
