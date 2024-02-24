import styles from '../../styles/Home.module.css';
import PC from '../../images/computer.png';

const Poster = () => {
	return (
		<section className={styles.home}>
			<div className={styles.title}>BIG SALE 40%</div>
			<div className={styles.product}>
				<div className={styles.text}>
					<div className={styles.subtitle}>the bestseller of 2024</div>
					<h1 className={styles.head}>COMPIK 2b2t with NVIDIA 4090 TI</h1>
					<button className={styles.button}>Buy now</button>
					</div>
					<div className={styles.image}>
						<img src={PC} alt="computer" />
				</div>
			</div>
		</section>
	);
};

export default Poster;
