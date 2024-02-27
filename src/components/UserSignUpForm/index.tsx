import { useState } from 'react';
import styles from '../../styles/User.module.css';
import { useDispatch } from 'react-redux';
import { createUser, toggleForm, toggleFormType } from '../../features/user/userSlice';

const UserSignUpForm = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		email: '',
		name: '',
		password: '',
		avatar: '',
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
		const isEmpty = Object.values(values).some((item) => !item );
		if(isEmpty) return;
		dispatch(createUser(values));
		handleClick()
	}
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
			<div className={styles.title}>Sign Up</div>
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
						type='name'
						name='name'
						placeholder='Your name'
						value={values.name}
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
				<div className={styles.group}>
					<input
						type='avatar'
						name='avatar'
						placeholder='Your avatar'
						value={values.avatar}
						autoComplete='off'
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.link} onClick={() => toggleCurrentForm('login')}>I already have an account</div>
				<button type='submit' className={styles.submit}>
					Create an account
				</button>
			</form>
		</div>
	);
};

export default UserSignUpForm;
