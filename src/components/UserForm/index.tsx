import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from '../../features/store';
import UserSignUpForm from '../UserSignUpForm';
import styles from '../../styles/User.module.css';
import { toggleForm} from '../../features/user/userSlice';
import UserLoginForm from '../../UserLoginForm';

const UserForm = () => {
	const dispatch = useDispatch();
	const { showForm, formType } = useSelector<RootState>(({ user }) => user) as {
		showForm: boolean;
		formType: 'signup' | 'login';
	};

	const closeForm = () => {
		dispatch(toggleForm(false));
	};

	

	return showForm ? (
		<>
			{formType === 'signup' ? <UserSignUpForm /> : <UserLoginForm />}
			<div className={styles.overlay} onClick={closeForm} />
		</>
	) : (
		<></>
	);
};

export default UserForm;
