import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Poster from '../Poster';
import { AppDispatch, RootState } from '../../features/store';
import Products from '../Products';
import ProductType from '../../types/product.interface';
import Categories from '../Categories';
import Category from '../../types/category.interface';
import Banner from '../Banner';
import { filterByPrice } from '../../features/Products/productsSlice';

const Home = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { products, categories } = useSelector<RootState>((state) => state) as {
		products: { list: ProductType[]; filtered: ProductType[] };
		categories: { list: Category[] };
	};

	useEffect(() => {
		if (!products.list.length) return;
		dispatch(filterByPrice(50));
	}, [dispatch, products.list.length]);
	return (
		<>
			<Poster />
			<Products products={products.list} amount={5} title='Trending' />
			<Categories
				categories={categories.list}
				amount={5}
				title='Best 5 categories'
			/>
			<Banner />
			<Products products={products.filtered} amount={5} title='Less than 50$' />
		</>
	);
};

export default Home;
