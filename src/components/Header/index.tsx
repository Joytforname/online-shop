import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from '../../styles/Header.module.css';
import { routes } from '../../utils/routes';
import AVATAR from '../../images/avatar.jpg';
import { RootState } from '../../features/store';
import User from '../../types/user.interface';
import { toggleForm } from '../../features/user/userSlice';

const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {currentUser} = useSelector<RootState>(({user}) => user) as {
		currentUser: null | User;
	};
	const [values, setValues] = useState({
		name: 'Guest',
		avatar: currentUser?.avatar ?? AVATAR,
	});

	const [search, setSearch] = useState('');

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
					{/* <div className={styles.box}></div> */}
				</form>
				<div className={styles.account}>
					<a href='' className={styles.favorites}>
						<svg className={styles['icon-fav']}>
							<use xlinkHref={`/sprite.svg#heart`} />
						</svg>
					</a>
					<a href={routes.cart} className={styles.cart}>
						<svg className={styles['icon-cart']}>
							<use xlinkHref={`/sprite.svg#bag`} />
						</svg>
						<span className={styles.count}>2</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
