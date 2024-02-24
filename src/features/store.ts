import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';


export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		// products: 'productsReducer',
		// cart: 'cartReducer',
		// checkout: 'checkoutReducer',
	},
	devTools: true
});

export type AppDispatch = typeof store.dispatch;
