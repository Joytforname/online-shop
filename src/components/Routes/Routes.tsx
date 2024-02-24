import { Route, Routes } from "react-router-dom";

import Home from '../Home/index'
import { routes } from "../../utils/routes";


const AppRoutes = () => {
	return <Routes>
        <Route path={routes.home} element={<Home />} />
	</Routes>;
};

export default AppRoutes;
