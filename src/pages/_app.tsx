import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import { client } from '../services'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<ChakraProvider theme={theme}>
				<ErrorBoundary>
					<Component {...pageProps} />
				</ErrorBoundary>
			</ChakraProvider>
		</ApolloProvider>
	)
}

export default MyApp
