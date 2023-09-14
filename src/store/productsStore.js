import { defineStore } from "pinia";
export const useProductsStore = defineStore("products", {
  state: () => ({
    purchasedItems: [],
    addedCartItems: [],
  }),

  getters: {},
  actions: {
    addToCart(item, quantity) {
      const purchasedItem = this.purchasedItems.find((purchasedItem) => {
        return purchasedItem.id === item.id;
      });
      if (purchasedItem) {
        item.quantity = quantity + purchasedItem.quantity;
      } else {
        item.quantity = quantity;
        this.purchasedItems.push(item);
      }
      this.addedCartItems = [...this.purchasedItems];
    },
    clearCart() {
      this.purchasedItems = [];
    },
  },

  persist: true,
});
