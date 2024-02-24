import styles from '../../styles/Footer.module.css';
import { routes } from '../../utils/routes';

const Footer = () => {
	return (
		<section className={styles.footer}>
			<div className={styles.logo}>
				<a href={routes.home}>
					<h1>
						<span style={{ color: '#7751a2' }}>Un</span>Shop
					</h1>
				</a>
			</div>
			<div className={styles.rights}>
				Developed by{' '}
				<a
					href='https://github.com/Joytforname'
					target='_blank'
					rel='noreferrer'
				>
					ID
				</a>
			</div>
			<div className={styles.socials}>
				<a href='https://t.me/tutumf' target='_blank' rel='noreferrer'>
					<svg
						className={styles['icon-fav']}
						fill='#000000'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
						<g
							id='SVGRepo_tracerCarrier'
							strokeLinecap='round'
							strokeLinejoin='round'
						></g>
						<g id='SVGRepo_iconCarrier'>
							<path d='m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z'></path>
						</g>
					</svg>
				</a>
				<a
					href='https://github.com/Joytforname'
					target='_blank'
					rel='noreferrer'
				>
					<svg
						className={styles['icon-fav']}
						viewBox='0 0 16 16'
						xmlns='http://www.w3.org/2000/svg'
						fill='#000000'
					>
						<g id='SVGRepo_iconCarrier'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z'
							></path>
						</g>
					</svg>
				</a>
			</div>
		</section>
	);
};

export default Footer;
