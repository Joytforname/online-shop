import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './features/store';
import './styles/index.css';
import App from './components/App/App';


ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>
);
