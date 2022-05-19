import { useContext } from "react";
import { AirlineAppContext } from "../../context/airline-context";
import { Actions } from "../Actions";
import { TileList } from "../Tiles/TileList";
import { Header } from "../Header";
export const LandingPage: React.FC<{}> = () => {
  const { AirlineData } = useContext(AirlineAppContext);

  return (
    <>
      <Header />
      <Actions />
      <TileList airlineData={AirlineData} />
    </>
  );
};
