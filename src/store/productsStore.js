import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", {
  state: () => ({ purchasedItems: [] }),
  getters: {},
  actions: {},
});
