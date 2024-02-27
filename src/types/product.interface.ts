import Category from "./category.interface";

interface ProductType {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[]
	quantity: number
}

export default ProductType;