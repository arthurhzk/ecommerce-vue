<template>
  <form @submit.prevent="handleSubmit">
    <the-label :for="email">Email:</the-label>
    <the-input v-model="email" type="text"></the-input>
    <the-label :for="password">Password:</the-label>
    <the-input v-model="password" type="password"></the-input>
    <button type="submit">Cadastrar</button>
  </form>
</template>

<script>
import TheInput from "@/components/atoms/TheInput.vue";
import TheLabel from "@/components/atoms/TheLabel.vue";

export default {
  name: "SignPage",
  components: {
    TheInput,
    TheLabel,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.password);
    },
  },
};
</script>

<style></style>
