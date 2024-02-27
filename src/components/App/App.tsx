import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/Products/productsSlice';
import { AppDispatch } from '../../features/store';

import Header from '../Header';
import Footer from '../Footer';
import Sidebar from '../Sidebar';
import AppRoutes from '../Routes/Routes'
import UserForm from '../UserForm';


const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<div className='app'>
			<Header />
			<UserForm/>
			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	);
};

export default App;
