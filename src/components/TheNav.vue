<template>
  <v-toolbar color="grey">
    <template v-slot:prepend> </template>

    <v-divider class="ms-3" inset vertical></v-divider>

    <router-link to="/" class="no-decor">
      <v-toolbar-title>NASTY FUNK STORE</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <router-link to="/" class="no-decor">
        <v-btn variant="text">Produtos</v-btn>
      </router-link>

      <v-divider vertical></v-divider>

      <router-link to="cart" class="no-decor">
        <v-btn variant="text">Carrinho {{ totalCartItems }}</v-btn>
      </router-link>

      <v-divider vertical></v-divider>

      <router-link to="sign-in" class="no-decor">
        <v-btn variant="text">Cadastrar</v-btn>
      </router-link>
      <v-divider vertical></v-divider>

      <router-link to="login" class="no-decor">
        <v-btn variant="text">Login</v-btn>
      </router-link>
    </v-toolbar-items>

    <v-divider vertical></v-divider>
  </v-toolbar>
</template>

<style>
.no-decor {
  text-decoration: none;
  color: white;
  display: flex;
}
</style>

<script>
import items from "@/data/items.js";
import { useProductsStore } from "@/store/productsStore.js";
export default {
  name: "TheNav",
  data() {
    return {
      items: items,
    };
  },
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  computed: {
    totalCartItems() {
      return this.productsStore.totalCartItems;
    },
  },
};
</script>
