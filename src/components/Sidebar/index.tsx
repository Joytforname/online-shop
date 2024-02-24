import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

import styles from '../../styles/Sidebar.module.css';
import Category from '../../types/category.interface';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const { list } = useSelector<RootState>(({ categories }) => categories) as {
		list: Category[];
	};
	const items =list.filter((_, i) => i < 5);
	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					{items.map(({ id, name }) => (
						<li key={id}>
							<NavLink
								className={({ isActive }) =>
									`${styles.link} ${isActive ? styles.active : ''}`
								}
								to={`/categories/${id}`}
							>
								{name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.footer}>
				<a className={styles.link} href='/' target='_blank'>
					Help
				</a>
				<a className={styles.link} href='/' target='_blank'>
					Terms & Conditions
				</a>
			</div>
		</section>
	);
};

export default Sidebar;
