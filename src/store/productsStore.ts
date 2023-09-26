import { Product } from "@/domain/Product";
import { defineStore } from "pinia";
interface ProductState {
  purchasedItems: Product[];
  addedCartItems: Product[];
}

export const useProductsStore = defineStore("products", {
  state: (): ProductState => ({
    purchasedItems: [],
    addedCartItems: [],
  }),

  getters: {
    totalCartItems(state) {
      return state.purchasedItems.reduce((total: number, item: Product) => {
        return total + (item.quantity || 0);
      }, 0);
    },
  },
  actions: {
    addToCart(item: Product, quantity: number) {
      const purchasedItem = this.purchasedItems.find((purchasedItem) => {
        return purchasedItem._id === item._id;
      });
      if (purchasedItem) {
        item.quantity = quantity + (purchasedItem.quantity || 0);
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
