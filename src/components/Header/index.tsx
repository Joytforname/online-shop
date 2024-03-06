import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from '../../styles/Header.module.css';
import { routes } from '../../utils/routes';
import AVATAR from '../../images/avatar.jpg';
import { RootState } from '../../features/store';
import User from '../../types/user.interface';
import { toggleForm } from '../../features/user/userSlice';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import ProductType from '../../types/product.interface';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {currentUser, cart} = useSelector<RootState>(({user}) => user) as {
		currentUser: null | User,
		cart: [] | ProductType[]
	};
	const [values, setValues] = useState({
		name: 'Guest',
		avatar: currentUser?.avatar ?? AVATAR,
	});

	const [search, setSearch] = useState('');
	const {data, isLoading} = useGetProductsQuery({title: search});
	console.log('data: ', data);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};
	

	useEffect(() => {
		if(!currentUser) return
		setValues({ name: currentUser.name, avatar: currentUser.avatar ?? '' });
	}, [currentUser])


	const handleClick = () => {
	if (!currentUser) dispatch(toggleForm(true));
	else navigate(routes.profile)
	}
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<a href={routes.home}>
					<h1>
						<span style={{ color: '#7751a2' }}>Un</span>Shop
					</h1>
				</a>
			</div>
			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div
						className={styles.avatar}
						style={{ backgroundImage: `url(${values.avatar})` }}
					/>
					<div className={styles.username}>{values.name}</div>
				</div>
				<form className={styles.form}>
					<div className={styles.icon}>
						<svg className='icon'>
							<use xlinkHref={`/sprite.svg#search`} />
						</svg>
					</div>
					<div className={styles.input}>
						<input
							type='search'
							name='search'
							placeholder='Search...'
							autoComplete='off'
							onChange={(e) => handleSearch(e)}
							value={search}
						/>
					</div>
					{search && <div className={styles.box}>
						{isLoading ? 'Loading...' : !data.length ? 'No results' : data.map((item: ProductType) => (
							<Link to={`/products/${item.id}`} key={item.id} className={styles.item} onClick={() => setSearch('')}>
								<div className={styles.image} style={{ backgroundImage: `url(${item.images[0]})` }}/>
								<div className={styles.title}>{item.title}</div>
								<div className={styles.price}>{item.price}$</div>
								
							</Link>
						))}
						</div>}
				</form>
				<div className={styles.account}>
					<a href='' className={styles.favorites}>
						<svg className={styles['icon-fav']}>
							<use xlinkHref={`/sprite.svg#heart`} />
						</svg>
					</a>
					<div className={styles.cart} onClick={() => navigate(routes.cart)}>
						<svg className={styles['icon-cart']}>
							<use xlinkHref={`/sprite.svg#bag`} />
						</svg>
						{cart.length > 0 && 
						<span className={styles.count}>{cart.length}</span>
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
