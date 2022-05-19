import { useState } from "react";
import { AirlineData } from "../../../api/airline";

interface TileProps {
  data: AirlineData;
}

export const TileListItem: React.FC<TileProps> = ({ data }: TileProps) => {
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
      className="flex flex-col items-center justify-center w-48 h-64 rounded bg-zinc-100"
    >
      <img
        className="mx-auto"
        src={`https://www.kayak.com/${data.logoURL}`}
        alt={data.name}
      />
      <h6 className="text-sm text-center">{data.name}</h6>
      <h6 className="text-sm text-center">{data.alliance}</h6>
      <h6 className="text-sm text-center">{data.phone}</h6>
      {hover && <h6 className="">{data.alliance}</h6>}
    </div>
  );
};
