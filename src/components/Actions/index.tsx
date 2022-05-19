import { useContext, useState } from "react";
import { AirlineAppContext } from "../../context/airline-context";

export const Actions: React.FC = () => {
  const { applyFilter } = useContext(AirlineAppContext);
  const [filter, setFilter] = useState({
    type: "",
  });
  const changeFilter = (e: any) => {
    const { id, checked } = e.target;
    if (checked) {
      setFilter({ type: id });
      applyFilter(id);
    } else {
      setFilter({ type: "reset" });
      applyFilter("reset");
    }
  };
  return (
    <>
      <input
        checked={filter.type === "OW"}
        type="checkbox"
        id="OW"
        onClick={changeFilter}
      />
      <input
        checked={filter.type === "ST"}
        type="checkbox"
        id="ST"
        onClick={changeFilter}
      />
      <input
        checked={filter.type === "SA"}
        type="checkbox"
        id="SA"
        onClick={changeFilter}
      />
    </>
  );
};
