import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../utils/routes";
import Home from "../Home";

const router = createBrowserRouter([{path: routes.home, element: <Home/>}])



const App = () => {

	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
}
 
export default App;