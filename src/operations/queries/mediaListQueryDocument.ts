import { graphql } from 'gql/gql';

const mediaListQueryDocument = graphql(`
  query mediaList($type: MediaType, $page: Int, $perPage: Int = 20) {
    Page(perPage: $perPage, page: $page) {
      mediaList(type: $type) {
        ...MediaListItem
      }
    }
  }
`);

export default mediaListQueryDocument;
