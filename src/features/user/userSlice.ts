import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import User from '../../types/user.interface';
import ProductType from '../../types/product.interface';
import axios from 'axios';
import { GET_AUTH, GET_USERS, POST_LOGIN } from '../../utils/constants';

interface IState {
	currentUser: null | User;
	cart: [] | ProductType[];
	isLoading: boolean;
	formType: 'signup' | 'login';
	showForm: boolean;
}

const initialState: IState = {
	currentUser: null,
	cart: [],
	isLoading: false,
	formType: 'signup',
	showForm: false,
};

export const createUser = createAsyncThunk(
	'users/createUser',
	async (payload, thunkAPI) => {
		try {
			const res = await axios.post(`${GET_USERS}`, payload);
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const updateUser = createAsyncThunk(
	'users/updateUser',
	async (payload: User, thunkAPI) => {
		try {
			const res = await axios.put(`${GET_USERS}/${payload.id}`, payload);
			return res.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	}
);

export const loginUser = createAsyncThunk(
	'users/loginUser',
	async (payload, thunkAPI) => {
		try {
			const res = await axios.post(`${POST_LOGIN}`, payload);
			const login = await axios.get(`${GET_AUTH}`, {headers: {'Authorization': `Bearer  ${res.data.access_token}`}});
			return login.data;
		} catch (err) {
			console.log(err);
			return thunkAPI.rejectWithValue(err);
		}
	}
);

const addCurrentUsers = (state, { payload }) => {
	state.currentUser = payload;
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addItemToCart: (state, { payload }) => {
			let newCart = [...state.cart];
			const found = state.cart.find(({ id }) => id === payload.id);

			if (found) {
				newCart = newCart.map((item) => {
					return item.id === payload.id
						? { ...item, quantity: payload.quantity || item.quantity + 1 }
						: item;
				});
			} else newCart.push({ ...payload, quantity: 1 });

			state.cart = newCart;
		},
		toggleForm: (state, { payload }) => {
			state.showForm = payload;
		},
		toggleFormType: (state, { payload }) => {
			state.formType = payload;
		}
	},
	extraReducers: (builder) => {
		// builder.addCase(getCategories.pending, (state) => {
		// 	state.isLoading = true;
		// });
		builder.addCase(createUser.fulfilled, addCurrentUsers);
		builder.addCase(loginUser.fulfilled, addCurrentUsers);
		builder.addCase(updateUser.fulfilled, addCurrentUsers);
		// builder.addCase(getCategories.rejected, (state) => {
		// 	state.isLoading = false;
		// });
	},
});

export const { addItemToCart, toggleForm, toggleFormType } = userSlice.actions;

export default userSlice.reducer;
