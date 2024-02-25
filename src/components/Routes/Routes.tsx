import { Route, Routes } from "react-router-dom";

import Home from '../Home/index'
import { routes } from "../../utils/routes";
import SingleProduct from "../SingleProduct";


const AppRoutes = () => {
	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.product} element={<SingleProduct />} />
		</Routes>
	);
};

export default AppRoutes;
