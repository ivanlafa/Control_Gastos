import React from "react";
import NuevoProsupuesto from "./NuevoProsupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  setGastos,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
       <ControlPresupuesto
       gastos={gastos}
       setGastos={setGastos}
       presupuesto={presupuesto}
       setPresupuesto={setPresupuesto}
       setIsValidPresupuesto={setIsValidPresupuesto}
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
