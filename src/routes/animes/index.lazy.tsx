import { useQuery } from '@tanstack/react-query';
import { createLazyFileRoute } from '@tanstack/react-router';
import { gqlClient } from '@operations/client';
import { MediaListQuery, MediaType } from 'gql/graphql';
import MediaListItem from '@components/MediaListItem';
import mediaListQueryDocument from '@operations/queries/mediaListQueryDocument';

const Anime = () => {
  const { data } = useQuery({
    queryKey: ['anime'],
    queryFn: async () =>
      gqlClient.request<MediaListQuery>(mediaListQueryDocument, {
        type: MediaType.Anime,
        page: 0,
      }),
  });

  return (
    <>
      <h1>Animes</h1>
      {data?.Page?.mediaList?.map(
        (mediaList) =>
          mediaList !== null && (
            <MediaListItem mediaList={mediaList} key={mediaList?.id} />
          )
      )}
    </>
  );
};

export const Route = createLazyFileRoute('/animes/')({
  component: Anime,
});
