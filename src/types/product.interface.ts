import Category from "./category.interface";

interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: Category;
	images: string[]
}

export default Product;