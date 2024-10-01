import { FragmentType, graphql, useFragment } from 'gql';
import './index.css';

const MediaListItemFragment = graphql(`
  fragment MediaListItem on MediaList {
    id
    score
    media {
      title {
        english
      }
      coverImage {
        medium
      }
    }
  }
`);

interface MediaListItemProps {
  mediaList: FragmentType<typeof MediaListItemFragment>;
}

const MediaListItem: React.FC<MediaListItemProps> = ({ mediaList }) => {
  const { score, media } = useFragment<typeof MediaListItemFragment>(
    MediaListItemFragment,
    mediaList
  );
  return (
    <div className="media-list">
      <img
        src={media?.coverImage?.medium ?? ''}
        className="media-list__image"
      />
      <h1 className="media-list__title">{media?.title?.english}</h1>
      <h2 className="media-list__subtitle">{score}</h2>
    </div>
  );
};

export default MediaListItem;
