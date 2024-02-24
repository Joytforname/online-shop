import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './Products/productsSlice';


export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		// cart: 'cartReducer',
		// checkout: 'checkoutReducer',
	},
	devTools: true
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
