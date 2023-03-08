import { Box, Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

const WrapForm = ({ children }: Props) => {
	return (
		<Flex bg="gray.200" justify="center" align="center" minH="100vh">
			<Box
				bg="white"
				rounded="md"
				p={6}
				maxWidth="500px"
				borderWidth={1}
				borderRadius={8}
				boxShadow="lg">
				{children}{' '}
			</Box>
		</Flex>
	)
}

export default WrapForm
