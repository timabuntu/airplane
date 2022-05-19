import { Airplane } from "phosphor-react";

export const Header: React.FC = () => {
  return (
    <div className="container flex p-4 mx-auto">
      <div>
        <Airplane className="w-24 h-8" />
      </div>
    </div>
  );
};
