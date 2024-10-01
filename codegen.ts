import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphql.anilist.co',
  documents: ['src/**/*.tsx', 'src/operations/**/*.ts', '!src/gql/**/*'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
      config: {
        avoidOptionals: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
