<template>
  <form>
    <base-input v-model="event.name" label="Name " type="text"></base-input>
    <base-input
      v-model="event.lastName"
      label="Last Name"
      type="text"
    ></base-input>
    <base-input v-model="event.city" label="City" type="text"></base-input>
    <base-input
      v-model="event.password"
      label="Password"
      type="password"
    ></base-input>
    <base-input v-model="event.email" label="Email" type="email"> </base-input>
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
};
</script>
