import { useEffect, useState } from "react";
import { AirlineData, Api } from "./api/airline";
import { AirlineAppContext } from "./context/airline-context";

export function App() {
  const [airline, setAirline] = useState<AirlineData[]>([]);

  const getAirlineData = async () => {
    const data = await Api.getAll();
    setAirline(data);
  };

  const applyFilter = () => {};

  useEffect(() => {
    getAirlineData();
  }, []);

  return (
    <div className="App">
      <h1 className="text-xl text-center">✈️ Airplane</h1>
      <AirlineAppContext.Provider
        value={{
          AirlineData: airline,
          applyFilter: applyFilter,
        }}
      >
        <h1>Landing Page</h1>
      </AirlineAppContext.Provider>
    </div>
  );
}

export default App;
