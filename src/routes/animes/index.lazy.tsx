import { createLazyFileRoute } from '@tanstack/react-router';
import MediaList from '@components/MediaList';
import { MediaType } from 'gql/graphql';

const Animes = () => (
  <>
    <h1>Animes</h1>
    <MediaList mediaType={MediaType.Anime} />
  </>
);

export const Route = createLazyFileRoute('/animes/')({
  component: Animes,
});
