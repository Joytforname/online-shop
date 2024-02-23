import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../utils/routes";
import Home from "../Home";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const router = createBrowserRouter([{path: routes.home, element: <Home/>}])



const App = () => {

	return (
		<div className='app'>
			<Header/>
			<div className="container">
				<Sidebar/>
			<RouterProvider router={router} />
			</div>
			<Footer/>
		</div>
	);
}
 
export default App;