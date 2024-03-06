import ProductType from '../types/product.interface';

export const shuffle = (array: ProductType[]) => {
	return [...array].sort(() => Math.random() - 0.5);
};

export const buildUrl = (url: string, params: { [key: string]: string }) => {
	let urlWithParams = url;

	Object.entries(params).forEach(([key, value], i) => {
		const sign = !i ? '?' : '&';
		urlWithParams += `${sign}${key}=${value}`;
	});

	return urlWithParams;
};


export const sumBy = (arr: number[]) => {
	return arr.reduce((acc, val) => acc + val, 0);
}