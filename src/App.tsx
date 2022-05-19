import { useEffect, useState } from "react";
import { AirlineData, Api } from "./api/airline";
import { LandingPage } from "./components/LandingPage";
import { AirlineAppContext } from "./context/airline-context";

export function App() {
  const [airline, setAirline] = useState<AirlineData[]>([]);
  const [filterAirline, setFilterAirline] = useState<AirlineData[]>([]);

  const getAirlineData = async () => {
    const data = await Api.getAll();
    setAirline(data);
    setFilterAirline(data);
  };

  useEffect(() => {
    getAirlineData();
  }, []);

  const applyFilter = (type: string) => {
    if (type === "reset") {
      setFilterAirline(airline);
      return;
    }
    const data = [...airline];
    const filterAirlineData = data.filter((i) => i.alliance === type);
    setFilterAirline(filterAirlineData);
  };

  return (
    <AirlineAppContext.Provider
      value={{
        AirlineData: filterAirline,
        applyFilter: applyFilter,
      }}
    >
      <LandingPage />
    </AirlineAppContext.Provider>
  );
}

export default App;
