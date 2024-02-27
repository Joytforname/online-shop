import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { routes } from '../../utils/routes';
import Product from '../Product';
import Products from '../Products';
import { useDispatch } from 'react-redux';
import { getRelatedProducts } from '../../features/Products/productsSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import ProductType from '../../types/product.interface';

const SingleProduct = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const { list, related } = useSelector<RootState>(
		({ products }) => products
	) as {
		related: ProductType[];
		list: ProductType[];
	};
	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

	useEffect(() => {
		if (!isLoading && !isFetching && !isSuccess) {
			navigate(routes.home);
		}
	}, [isLoading, isFetching, isSuccess, navigate]);

	useEffect(() => {
		if(!data || !list.length) return
		if (data ) {
			dispatch(getRelatedProducts(data.category.id));
		}
	}, [data, dispatch, list.length]);

	return !data ? (
		<section className='preloader'>Loading...</section>
	) : (
		<>
			<Product {...data} />
			<Products products={related} amount={15} title='Related products'/>
		</>
	);
};

export default SingleProduct;
