import { useContext } from "react";
import { AirlineAppContext } from "../../context/airline-context";

export function LandingPage() {
  const {} = useContext(AirlineAppContext);
  return <h1>Landing Page</h1>;
}
