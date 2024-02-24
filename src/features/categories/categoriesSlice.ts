import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL, GET_CATEGORIES } from '../../utils/constants';
import axios from 'axios';
import Category from '../../types/category.interface';

interface IState {
	list: [] | Category[];
	isLoading: boolean;
}

const initialState: IState = {
	list: [],
	isLoading: false,
};

export const getCategories = createAsyncThunk(
	'categories/getCategories',
	async (_, thunkAPI) => {
		try {
			const res = await axios.get(`${GET_CATEGORIES}`);
			return res.data;
		} catch (error) {
			console.log(error);
			return thunkAPI.rejectWithValue(error);
		}
	}
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getCategories.fulfilled, (state, { payload }) => {
			state.list = payload;
			state.isLoading = false;
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.isLoading = false;
		});
	},
});

export default categoriesSlice.reducer;
