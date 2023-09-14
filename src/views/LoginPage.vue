<template>
  <form @submit.prevent="submitForm">
    <base-input label="E-mail" type="email"></base-input>
    <base-input label="Password" type="password"></base-input>
    <the-button @click="submitForm">Login</the-button>
    <p>
      Não tem uma conta?
      <router-link to="sign-in">Clique aqui!</router-link>
    </p>
  </form>
</template>

<script lang="ts">
import TheButton from "@/components/atoms/TheButton.vue";
import BaseInput from "@/components/atoms/BaseInput.vue";
export default {
  name: "LoginPage",
  components: {
    TheButton,
    BaseInput,
  },
  methods: {
    submitForm() {
      console.log("yea");
    },
  },
};
</script>
