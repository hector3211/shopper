import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  cart: [],
  addToCart: (item, id) =>
    set((state) => ({
      cart: [...state.cart, { item, id }],
    })),
  removeItemFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
});

store = persist(store, { name: "cart" });
const useStore = create(store);
export default useStore;
