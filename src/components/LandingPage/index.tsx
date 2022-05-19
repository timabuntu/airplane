import { useContext } from "react";
import { AirlineAppContext } from "../../context/airline-context";
import { TileList } from "../Tiles/TileList";

export const LandingPage: React.FC = () => {
  const { AirlineData } = useContext(AirlineAppContext);

  return (
    <>
      <TileList airlineData={AirlineData} />
    </>
  );
};
