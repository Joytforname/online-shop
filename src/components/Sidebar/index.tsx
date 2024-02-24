import { NavLink } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.css';

const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					<li>
						<a href={`/categories${2}`}>Link</a>
					</li>
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
