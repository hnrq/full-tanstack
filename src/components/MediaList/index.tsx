import { useQuery } from '@tanstack/react-query';
import { gqlClient } from '@operations/client';
import { MediaListQuery, MediaType } from 'gql/graphql';
import MediaListItem from './MediaListItem';
import mediaListQueryDocument from '@operations/queries/mediaListQueryDocument';
import { memo } from 'react';

import './index.css';

export interface MediaListProps {
  mediaType: MediaType;
}

const MediaList: React.FC<MediaListProps> = memo(
  ({ mediaType }) => {
    const { data, isFetching } = useQuery({
      queryKey: [mediaType.toLowerCase()],
      queryFn: async () =>
        gqlClient.request<MediaListQuery>(mediaListQueryDocument, {
          type: mediaType,
          page: 0,
        }),
    });

    if (isFetching) return <div>Loading...</div>;

    return (
      <div className="media-list">
        {data?.Page?.mediaList?.map(
          (mediaList) =>
            mediaList !== null && (
              <MediaListItem mediaList={mediaList} key={mediaList?.id} />
            )
        )}
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.mediaType === nextProps.mediaType
);

export default MediaList;
