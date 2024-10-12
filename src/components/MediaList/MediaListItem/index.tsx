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
    <div className="media-list-item">
      <img
        src={media?.coverImage?.medium ?? ''}
        className="media-list-item__image"
      />
      <div>
        <h4 className="media-list-item__title">{media?.title?.english}</h4>
        <span className="media-list-item__subtitle">{score}</span>
      </div>
    </div>
  );
};

export default MediaListItem;
