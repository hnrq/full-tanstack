import './index.css';

interface TileProps {
  title: string;
  subtitle: string;
  image: string;
}

const Tile: React.FC<TileProps> = ({ title, subtitle, image }) => (
  <div className="tile">
    <img src={image} className="tile__image" />
    <h1 className="tile__title">{title}</h1>
    <h2 className="tile__subtitle">{subtitle}</h2>
  </div>
);

export default Tile;
