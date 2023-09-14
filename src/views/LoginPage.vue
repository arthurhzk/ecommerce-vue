<template>
  <form @submit.prevent="submitForm">
    <base-input type="email"></base-input>
    <base-input type="password"></base-input>
    <the-button @click="submitForm">Login</the-button>
  </form>
</template>

<script>
import TheButton from "@/components/atoms/TheButton.vue";
import BaseInput from "@/components/atoms/BaseInput.vue";
export default {
  name: "LoginPage",
  components: {
    TheButton,
    BaseInput,
  },
};
</script>
