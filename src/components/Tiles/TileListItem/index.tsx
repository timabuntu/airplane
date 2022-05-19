import { useState } from "react";
import { AirlineData } from "../../../api/airline";

interface TileProps {
  data: AirlineData;
}

export const Tile: React.FC<TileProps> = ({ data }: TileProps) => {
  const [hover, setHover] = useState(false);
  const handleMouseHover = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div
      onMouseOver={handleMouseHover}
      onMouseOut={handleMouseOut}
      className="bg-green-200"
    >
      <img src={data.logUrl} alt={data.name} />
      <div className="">{data.name}</div>
      <div className="">{data.phone}</div>
      {hover && <div className="">{data.alliance}</div>}
    </div>
  );
};
