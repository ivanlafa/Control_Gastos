import React from "react";
import NuevoProsupuesto from "./NuevoProsupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
       <ControlPresupuesto
       presupuesto={presupuesto}
       />
      ) : (
        <NuevoProsupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

export default Header;
