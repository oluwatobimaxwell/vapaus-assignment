export const validateEmail = (email: string): boolean => {
	const re = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
};

export const validatePassword = (password: string): boolean => {
	const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).+$/;
	return re.test(password) && password.length >= 6;
};
