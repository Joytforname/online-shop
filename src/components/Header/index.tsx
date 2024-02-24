import styles from '../../styles/Header.module.css';
import { routes } from '../../utils/routes';
import AVATAR from '../../images/avatar.jpg';

const Header = () => {
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
				<div className={styles.user}>
					<div
						className={styles.avatar}
						style={{ backgroundImage: `url(${AVATAR})` }}
					/>
					<div className={styles.username}>Hello</div>
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
							onChange={(e) => console.log(e.target.value)}
							value=''
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
