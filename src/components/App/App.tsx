import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AsyncThunkAction } from '@reduxjs/toolkit';

import { routes } from '../../utils/routes';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import { useEffect } from 'react';
import { getCategories } from '../../features/categories/categoriesSlice';
import {AppDispatch} from '../../features/store'

const router = createBrowserRouter([{ path: routes.home, element: <Home /> }]);

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />
			<div className='container'>
				<Sidebar />
				<RouterProvider router={router} />
			</div>
			<Footer />
		</div>
	);
};

export default App;
