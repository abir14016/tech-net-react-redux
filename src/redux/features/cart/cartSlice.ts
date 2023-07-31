import { IProduct } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  totalPrice: number;
}
const initialState: ICart = {
  products: [],
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing) {
        existing.quantity! += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
    },
    removeOneFromCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing && existing.quantity! > 1) {
        existing.quantity! -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }

      state.totalPrice -= action.payload.price;
    },
    deleteFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.totalPrice -= action.payload.price * action.payload.quantity!;
    },
  },
});

export const { addToCart, deleteFromCart, removeOneFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
