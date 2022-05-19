import { AirlineData } from "../../../api/airline";
import Tile from "../TileListItem";

interface TileListProps {
  airlineData: AirlineData[];
}

export const TileList: React.FC<TileListProps> = ({
  airlineData,
}: TileListProps) => {
  return (
    <div>
      {airlineData.map((i: AirlineData) => {
        return <Tile data={i} key={i.code} />;
      })}
      {airlineData.length === 0 && <span>Loading ...</span>}
    </div>
  );
};
