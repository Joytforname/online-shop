import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './features/store';
import './styles/index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
		<App />
		</BrowserRouter>
	</Provider>
);
