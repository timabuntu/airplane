import { useContext } from "react";
import { AirlineAppContext } from "../../context/airline-context";
import TileList from "../Tiles/TileList";

export function LandingPage() {
  const { AirlineData } = useContext(AirlineAppContext);
  return <TileList airlineData={AirlineData} />;
}
