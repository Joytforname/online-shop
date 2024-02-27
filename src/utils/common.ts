import ProductType from '../types/product.interface';

export const shuffle = (array: ProductType[]) => {
	return [...array].sort(() => Math.random() - 0.5);
};
