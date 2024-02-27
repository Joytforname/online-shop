import { Link } from 'react-router-dom';
import styles from '../../styles/Products.module.css';
import ProductType from '../../types/product.interface';
import { CSSProperties } from 'react';

type Props = {
	title: string;
	products: ProductType[];
	style?: CSSProperties | undefined;
	amount: number;
};

const Products = ({ title, products =[], style, amount }: Props) => {
	const list = products.filter((_, i) => i < amount);
	return (
		<section className={styles.products} style={style}>
			{title && <h2>{title}</h2>}
			<div className={styles.list}>
				{list.map((product: ProductType) => (
					<Link
						to={`/products/${product.id}`}
						key={product.id}
						className={styles.product}
					>
						<div
							className={styles.image}
							style={{ backgroundImage: `url(${product.images[0]})` }}
						></div>
						<div className={styles.wrapper}>
							<h3 className={styles.title}>{product.title}</h3>
							<div className={styles.cat}>{product.category.name}</div>
							<div className={styles.info}>
								<div className={styles.prices}>
									<div className={styles.price}>{product.price}$</div>
									<div className={styles.oldPrice}>
										{Math.floor(product.price * 0.8)}$
									</div>
								</div>
								<div className={styles.purchases}>
									{Math.floor(Math.random() * 30 + 1)} purchased
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Products;
