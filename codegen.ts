import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: process.env.NEXT_PUBLIC_API_SERVER,
	documents: ['src/**/*.tsx'],
	generates: {
		'./src/__generated__/graphql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
}

export default config
