import { Route, Routes } from "react-router-dom";

import Home from '../Home/index'
import { routes } from "../../utils/routes";
import SingleProduct from "../SingleProduct";
import Profile from "../Profile";
import SingleCategory from "../../SingleCategory";
import Cart from "../Cart";


const AppRoutes = () => {
	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.product} element={<SingleProduct />} />
			<Route path={routes.profile} element={<Profile />} />
			<Route path={routes.category} element={<SingleCategory />} />
			<Route path={routes.cart} element={<Cart />} />
		</Routes>
	);
};

export default AppRoutes;
