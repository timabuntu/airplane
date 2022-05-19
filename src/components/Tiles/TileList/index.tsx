import { AirlineData } from "../../../api/airline";
import { TileListItem } from "../TileListItem";

interface TileListProps {
  airlineData: AirlineData[];
}

export const TileList: React.FC<TileListProps> = ({
  airlineData,
}: TileListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {airlineData.map((i: AirlineData) => {
        return <TileListItem data={i} key={i.code} />;
      })}
      {airlineData.length === 0 && <span>Loading ...</span>}
    </div>
  );
};
