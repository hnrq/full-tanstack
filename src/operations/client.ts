import { QueryClient } from '@tanstack/react-query';
import { GraphQLClient } from 'graphql-request';

export const queryClient = new QueryClient();
export const gqlClient = new GraphQLClient('https://graphql.anilist.co');
