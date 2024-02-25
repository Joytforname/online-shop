import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './Products/productsSlice';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		api: apiSlice.reducer,
		// cart: 'cartReducer',
		// checkout: 'checkoutReducer',
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
