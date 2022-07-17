import create from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: (item, id) =>
    set((state) => ({
      cart: [...state.cart, { item, id }],
    })),
  removeItemFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
}));

export default useStore;
