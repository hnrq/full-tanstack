import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { gqlClient } from '@operations/client';
import { MediaListDocument, MediaType } from 'gql/graphql';
import Tile from '@components/Tile';

const Anime = () => {
  const { data } = useQuery({
    queryKey: ['anime'],
    queryFn: () =>
      gqlClient.request(MediaListDocument, { type: MediaType.Anime, page: 0 }),
  });

  return (
    <>
      <h1>Animes</h1>
      {data.map((anime) => (
        <Tile key={anime.id} title={''} subtitle={''} image={''} />
      ))}
    </>
  );
};

export const Route = createLazyFileRoute('/animes/')({
  component: Anime,
});
