<template>
  <div>
    <v-card>
      <v-card-title class="headline">Agradecemos pela sua compra!</v-card-title>
      <v-card-text>
        <p>Detalhes do Pedido:</p>
        <div v-for="(item, index) in productsStore.addedCartItems" :key="index">
          <v-row align="center">
            <v-col cols="3">
              <v-img :src="item.image" alt="" width="100"></v-img>
            </v-col>
            <v-col cols="6">
              <p>{{ item.title }}</p>
              <p>Valor: R$ {{ item.price }}</p>
              <p>Quantidade: {{ item.quantity }}</p>
            </v-col>
          </v-row>
        </div>

        <p>Valor Total: R$ {{ formattedTotal }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { useProductsStore } from "@/store/productsStore";

export default {
  setup() {
    const productsStore = useProductsStore();
    return { productsStore };
  },
  computed: {
    formattedTotal() {
      let total = 0;
      for (const item of this.productsStore.addedCartItems) {
        total += item.price * (item.quantity || 0);
      }
      return total.toFixed(2);
    },
  },
};
</script>

<style scoped></style>
