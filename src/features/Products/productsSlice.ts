import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GET_PRODUCTS } from '../../utils/constants';
import axios from 'axios';
import Product from '../../types/product.interface';

interface IState {
	list: [] | Product[];
	filtered: [] | Product[];
	isLoading: boolean;
}

const initialState: IState = {
	list: [],
	filtered: [],
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

export const {filterByPrice} = productsSlice.actions;

export default productsSlice.reducer;
