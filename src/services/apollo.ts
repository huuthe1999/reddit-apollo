import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_SERVER,

	cache: new InMemoryCache(),
	credentials: 'include',
	connectToDevTools: true,
})

export default client
