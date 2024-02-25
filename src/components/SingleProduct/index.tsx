import { useNavigate, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../features/api/apiSlice';
import { useEffect } from 'react';
import { routes } from '../../utils/routes';
import Product from '../Product';

const SingleProduct = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
	useEffect(() => {
		if (!isLoading && !isFetching && !isSuccess) {
			navigate(routes.home);
		}
	}, [isLoading, isFetching, isSuccess, navigate]);

	return !data ? <section>Loading...</section> : <Product {...data} />;
};

export default SingleProduct;
