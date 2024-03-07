interface User {
	id?: number;
	name?: string;
	email: string;
	password: string;
	role?: string;
	avatar?: undefined | string;
}

export default User;
