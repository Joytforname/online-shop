import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_PRODUCTS } from '../../utils/constants';
import axios from 'axios';
import ProductType from '../../types/product.interface';
import { shuffle } from '../../utils/common';

interface IState {
	list: [] | ProductType[];
	filtered: [] | ProductType[];
	related: [] | ProductType[];
	isLoading: boolean;
}

const initialState: IState = {
	list: [],
	filtered: [],
	related: [],
	isLoading: false,
};

export const getProducts = createAsyncThunk(
	'products/getProducts',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get(`${GET_PRODUCTS}`);
			return res.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		filterByPrice: (state, {payload}) => {
			state.filtered = state.list.filter(product => product.price < payload);
		},
		getRelatedProducts: (state, {payload}) => {
			const list = state.list.filter(({category: {id}}) => id === payload)
			state.related = shuffle(list)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getProducts.fulfilled, (state, { payload }) => {
			state.list = payload;
			state.isLoading = false;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
