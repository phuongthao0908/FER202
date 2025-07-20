//features/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '123456',
    name: 'Laptop ASUS',
    price: 999.99,
    description: 'Laptop ASUS mạnh mẽ cho lập trình viên.',
    catalogs: ['Electronics', 'Computers'],
  },
  {
    id: '789012',
    name: 'Tai nghe Sony',
    price: 199.99,
    description: 'Tai nghe chống ồn cao cấp từ Sony.',
    catalogs: ['Microphone', 'Accessories'],
  },
  {
    id: '345678',
    name: 'Chuột Logitech',
    price: 49.99,
    description: 'Chuột không dây hiệu suất cao.',
    catalogs: ['Accessories', 'Electronics'],
  },
];


const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
