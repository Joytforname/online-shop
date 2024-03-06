import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

import ProductType from '../../types/product.interface';
import styles from '../../styles/Cart.module.css';
import { sumBy } from '../../utils/common';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../features/user/userSlice';

const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector<RootState>(({ user }) => user) as {
		cart: ProductType[];
	};

	const changeQuantity =(item : ProductType , quantity : number)=>{
		dispatch(addItemToCart({...item, quantity}))
	}

	const removeItem = (item: ProductType) => {
		dispatch(removeItemFromCart(item.id))
	}

	return (
		<section className={styles.cart}>
			<h2 className={styles.title}>Cart</h2>
			{!cart.length ? (
				<div className={styles.empty}>Here is empty</div>
			) : (
				<>
					<div className={styles.list}>
						{cart.map((item) => {
							return (
								<div className={styles.item} key={item.id}>
									<div
										className={styles.image}
										style={{ backgroundImage: `url(${item.images[0]})` }}
									/>
									<div className={styles.info}>
										<h3 className={styles.name}>{item.title}</h3>
										<div className={styles.category}>{item.category.name}</div>
									</div>
									<div className={styles.price}>{item.price}$</div>
									<div className={styles.quantity}>
										<div
											className={styles.minus}
											onClick={() =>
												changeQuantity(item, Math.max(1, item.quantity - 1))
											}
										>
											<svg className='icon'>
												<use xlinkHref={`/sprite.svg#minus`} />
											</svg>
										</div>
										<span>{item.quantity}</span>
										<div
											className={styles.plus}
											onClick={() =>
												changeQuantity(item, Math.max(1, item.quantity + 1))
											}
										>
											<svg className='icon'>
												<use xlinkHref={`/sprite.svg#plus`} />
											</svg>
										</div>
									</div>
									<div className={styles.total}>
										{item.price * item.quantity}$
									</div>
									<div className={styles.close} onClick={() => removeItem(item)}>
										<svg className='icon'>
											<use xlinkHref={`/sprite.svg#close`} />
										</svg>
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles.actions}>
						<div className={styles.total}>
							TOTAL PRICE:{' '}
							<span>
								{sumBy(cart.map(({ quantity, price }) => quantity * price))}$
							</span>
						</div>
						<button className={styles.proceed}>Proceed to checkout</button>
					</div>
				</>
			)}
		</section>
	);
};

export default Cart;
