import { FormControl, FormErrorMessage, FormLabel, Input, InputGroup } from '@chakra-ui/react'
import { useField } from 'formik'
import { HTMLInputTypeAttribute, ReactNode } from 'react'
interface Props {
	label: string
	name: string
	type?: HTMLInputTypeAttribute
	placeHolder?: string
	children?: ReactNode
	isRequired?: boolean
}

const InputField = ({
	name,
	label,
	placeHolder,
	isRequired = true,
	children,
	type = 'text',
}: Props) => {
	const [field, { error, touched }] = useField(name)

	return (
		<FormControl isRequired={isRequired} isInvalid={!!error && touched}>
			<FormLabel htmlFor={field.name}>{label}</FormLabel>
			<InputGroup>
				<Input
					type={type}
					id={field.name}
					placeholder={placeHolder}
					variant="filled"
					{...field}
				/>
				{children}
			</InputGroup>

			{error && <FormErrorMessage>{error}</FormErrorMessage>}
		</FormControl>
	)
}

export default InputField
