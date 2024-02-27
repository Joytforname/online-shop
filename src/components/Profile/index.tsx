import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from '../../styles/Profile.module.css';
import {
	createUser,
	toggleForm,
	updateUser,
} from '../../features/user/userSlice';
import { RootState } from '../../features/store';
import User from '../../types/user.interface';

const Profile = () => {
	const dispatch = useDispatch();
	const { currentUser } = useSelector<RootState>(({ user }) => user) as {
		currentUser: null | User;
	};
	const [values, setValues] = useState({
		email: '',
		name: '',
		password: '',
		avatar: '',
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const isEmpty = Object.values(values).some((item) => !item);
		if (isEmpty) return;
		dispatch(updateUser(values));
	};

	useEffect(() => {
		if (!currentUser) return;
		setValues({
			email: currentUser.email,
			name: currentUser.name,
			password: currentUser.password,
			avatar: currentUser.avatar,
			id: currentUser.id,
		});
	}, [currentUser]);

	return (
		<section className={styles.profile}>
			{!currentUser ? (
				<div
					className={`${styles.profile} ${styles.form}`}
					style={{ textAlign: 'center' }}
				>
					<span>You need to login</span>
					<button onClick={() => dispatch(toggleForm(true))}>Login</button>
				</div>
			) : (
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
					<button type='submit' className={styles.submit}>
						Save
					</button>
				</form>
			)}
		</section>
	);
};

export default Profile;
