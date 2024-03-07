import { useState } from 'react';
import styles from '../styles/User.module.css';

import { toggleForm, toggleFormType } from '../features/user/userSlice';
import { loginUser } from '../features/user/userSlice';
import { useAppDispatch } from '../features/store';

const UserLoginForm = () => {
	const dispatch = useAppDispatch();
	const [values, setValues] = useState({
		email: '',
		password: '',
	});

	const handleClick = () => {
		dispatch(toggleForm(false));
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const isEmpty = Object.values(values).some((item) => !item);
		if (isEmpty) return;
		dispatch(loginUser(values));
		handleClick();
	};

	const toggleCurrentForm = (type: string) => {
		dispatch(toggleFormType(type));
	};
	return (
		<div className={styles.wrapper}>
			<div className={styles.close} onClick={handleClick}>
				<svg className={styles['icon-fav']}>
					<use xlinkHref={`/sprite.svg#close`} />
				</svg>
			</div>
			<div className={styles.title}>LogIn</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.group}>
					<input
						type='email'
						name='email'
						placeholder='Your email'
						value={values.email}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.group}>
					<input
						type='password'
						name='password'
						placeholder='Your password'
						value={values.password}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.link} onClick={() => toggleCurrentForm('signup')}>Create an account</div>
				<button type='submit' className={styles.submit}>
					Login
				</button>
			</form>
		</div>
	);
};

export default UserLoginForm;
