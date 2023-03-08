import { useMutation } from '@apollo/client'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, InputRightElement, VStack } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import InputField from '../components/InputField'
import WrapForm from '../components/WrapForm'
import { REGISTER_USER } from '../graphql/mutations'
import { FormSignUpValues } from '../types'
import { validateSignUpUser } from '../validations'

interface Props {}

const SignUp = (props: Props) => {
	const [showPassword, setShowPassword] = useState(false)
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)

	const initialValues: FormSignUpValues = {
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	}

	const [createNewUser, { loading, data, error }] = useMutation(REGISTER_USER)
	const handlePasswordVisibility = () => setShowPassword(!showPassword)
	const handlePasswordConfirmVisibility = () => setShowPasswordConfirm(!showPasswordConfirm)

	const handleSubmit = (values: FormSignUpValues) => {
		const { passwordConfirm, ...credentials } = values
		createNewUser({
			variables: {
				data: credentials,
			},
		})
	}

	const renderShowPassword = !showPassword ? <ViewIcon /> : <ViewOffIcon />

	if (error) console.log('error', error)
	if (loading) console.log('Loading ...')
	if (data) console.log('data', data)

	return (
		<>
			<WrapForm>
				<Formik
					initialValues={initialValues}
					validationSchema={validateSignUpUser}
					onSubmit={handleSubmit}>
					{({ handleSubmit, dirty, isValid }) => (
						<Form onSubmit={handleSubmit} noValidate autoComplete="off">
							<VStack spacing={4}>
								<Box textAlign="center">
									<Heading as="h3" size="lg">
										Sign up Form
									</Heading>
								</Box>
								<InputField
									name="username"
									label="Username"
									placeHolder="User name"
								/>
								<InputField
									name="email"
									label="Email"
									placeHolder="Email"
									type="email"
								/>
								<InputField
									name="password"
									label="Password"
									placeHolder="Password"
									type={showPassword ? 'text' : 'password'}>
									<InputRightElement width="3rem">
										<Button
											h="1.5rem"
											size="sm"
											onClick={handlePasswordVisibility}>
											{renderShowPassword}
										</Button>
									</InputRightElement>
								</InputField>
								<InputField
									name="passwordConfirm"
									label="Confirm password"
									placeHolder="Confirm your password"
									type={showPassword ? 'text' : 'password'}>
									<InputRightElement width="3rem">
										<Button
											h="1.5rem"
											size="sm"
											onClick={handlePasswordConfirmVisibility}>
											{renderShowPassword}
										</Button>
									</InputRightElement>
								</InputField>
								<Button
									isDisabled={!(isValid && dirty)}
									type="submit"
									w="full"
									colorScheme="purple"
									isLoading={loading}>
									Sign Up
								</Button>
							</VStack>
						</Form>
					)}
				</Formik>
			</WrapForm>
		</>
	)
}

export default SignUp
