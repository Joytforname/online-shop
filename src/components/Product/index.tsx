import { Link } from 'react-router-dom';
import styles from '../../styles/Product.module.css';
import { routes } from '../../utils/routes';
import { useEffect, useState } from 'react';

interface Props {
	images: string[];
	title: string;
	price: number;
	description: string;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const Product = ({ images, title, price, description }: Props) => {
	const [currentImg, setCurrentImg] = useState('');
	const [currentSize, setCurrentSize] = useState('');
	useEffect(() => {
		if (!images.length) return;
		setCurrentImg(images[0]);
	}, [images]);

	return (
		<section className={styles.product}>
			<div className={styles.images}>
				<div
					className={styles.current}
					style={{ backgroundImage: `url(${currentImg})` }}
				/>
				<div className={styles['images-list']}>
					{images.map((image, i) => (
						<div
							className={styles.image}
							style={{ backgroundImage: `url(${image})` }}
							key={i}
							onClick={() => {
								setCurrentImg(images[i]);
							}}
						/>
					))}
				</div>
			</div>
			<div className={styles.info}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.price}>{price}$</div>
				<div className={styles.color}>
					<span>Color:</span> Best
				</div>
				<div className={styles.sizes}>
					<span>Sizes:</span>
					<div className={styles.list}>
						{sizes.map((size, i) => (
							<div onClick={() => {setCurrentSize(size)}} className={`${styles.size} ${currentSize === size ? styles.active : ''}`} key={i}>
								{size}
							</div>
						))}
					</div>
				</div>
				<p className={styles.description}>{description}</p>
				<div className={styles.actions}>
					<button className={styles.add} disabled={!currentSize}>Add to cart</button>
					<button className={styles.favourite}>Add to wishlist</button>
				</div>
				<div className={styles.bottom}>
					<div className={styles.purchase}>31 people purchased</div>
					<Link to={routes.home}>Return to main</Link>
				</div>
			</div>
		</section>
	);
};

export default Product;
