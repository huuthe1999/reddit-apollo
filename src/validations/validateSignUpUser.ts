import * as Yup from 'yup'

export const validateSignUpUser = Yup.object({
	username: Yup.string().required('User name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	password: Yup.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Password is required'),
	passwordConfirm: Yup.string()
		.oneOf([Yup.ref('password')], 'Your passwords do not match.')
		.required('Confirm password is required'),
})
