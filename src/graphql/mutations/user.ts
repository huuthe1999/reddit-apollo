// Import everything needed to use the `useQuery` hook
import { gql, TypedDocumentNode } from '@apollo/client'
import { User, UserCreateInput } from '../../__generated__/graphql'

export const REGISTER_USER: TypedDocumentNode<User | null, { data: UserCreateInput }> = gql`
	mutation Mutation($data: UserCreateInput!) {
		createNewUser(data: $data) {
			id
			email
			username
		}
	}
`

export const LOGIN_USER = gql`
	mutation LoginUser($data: UserLoginInput!) {
		loginUser(data: $data) {
			id
			email
			username
			Post {
				id
			}
		}
	}
`
