import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../features/api/apiSlice';

import styles from '../../styles/Category.module.css';
import Products from '../Products';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import Category from '../../types/category.interface';
import ProductType from '../../types/product.interface';

const Category = () => {
	const { id } = useParams();
	const { list } = useSelector<RootState>(({ categories }) => categories) as {
		list: Category[];
	};
	const defaultValues = useMemo(
		() => ({
			title: '',
			price_min: 0,
			price_max: 0,
		}),
		[]
	);
	const defaultParams = useMemo(
		() => ({
			...defaultValues,
			limit: 5,
			offset: 0,
			categoryId: id,
		}),
		[defaultValues, id]
	);

		const [isEnd, setIsEnd] = useState(false);
	const [values, setValues] = useState(defaultValues);
	const [items, setItems] = useState<ProductType[]>([]);
	const [params, setParams] = useState(defaultParams);
	const [categoryName, setCategoryName] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setIsEnd(false);
		setItems([]);
		setParams({ ...defaultParams, ...values });
	};
	useEffect(() => {
		if (!id) return;
		setItems([])
		setIsEnd(false)
		setValues(defaultValues);
		setParams({ ...defaultParams, categoryId: id });
	}, [defaultParams, defaultValues, id]);

	useEffect(() => {
		if (!id && !list.length) return;
		const category = list.find((item) => item.id === Number(id));
		if (!category) return;
		setCategoryName(category.name);
	}, [list, id]);

	const { data, isLoading, isSuccess } = useGetProductsQuery(params);

	useEffect(() => {
		if (isLoading) return;
		if (!data.length) return setIsEnd(true);
		setItems((prevItems) => ([...prevItems, ...data]));
	}, [data, isLoading]);

	const handleReset = () => {
		setValues(defaultValues);
		setParams(defaultParams);
		setIsEnd(false);
	}
	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>{categoryName}</h2>
			<form className={styles.filters} onSubmit={handleSubmit}>
				<div className={styles.filter}>
					<input
						type='text'
						name='title'
						placeholder='Product name'
						value={values.title}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.filter}>
					<input
						type='number'
						name='price_min'
						placeholder='Price min'
						value={values.price_min}
						onChange={handleChange}
					/>
					<span>Price from</span>
				</div>
				<div className={styles.filter}>
					<input
						type='number'
						name='price_max'
						placeholder='Price max'
						value={values.price_max}
						onChange={handleChange}
					/>
					<span>Price to</span>
				</div>
				<button type='submit' hidden />
			</form>
			{isLoading ? (
				<div className='preloader'>Loading...</div>
			) : !isSuccess || !items.length ? (
				<div className={styles.back}>
					<span>No products</span>
					<button onClick={handleReset}>Reset</button>
				</div>
			) : (
				<Products
					products={items}
					amount={items.length}
					title=''
					style={{ padding: 0 }}
				/>
			)}
			<div className={styles.more}>
				{!isEnd && (
					<button
						onClick={() =>
							setParams({ ...params, offset: params.offset + params.limit })
						}
					>
						See more
					</button>
				)}
			</div>
		</section>
	);
};

export default Category;
