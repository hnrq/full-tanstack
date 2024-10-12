import { createLazyFileRoute } from '@tanstack/react-router';
import MediaList from '@components/MediaList';
import { MediaType } from 'gql/graphql';

const Anime = () => {
  return (
    <>
      <h1>Mangas</h1>
      <MediaList mediaType={MediaType.Manga} />
    </>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Anime,
});
