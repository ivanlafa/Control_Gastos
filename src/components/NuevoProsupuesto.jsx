import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoProsupuesto = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();
    //console.log(Number(presupuesto));
    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto valido");

      return;
    }
    setMensaje("");
    setIsValidPresupuesto(true)
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>

          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />

          {/* BOTON AÑADIR  */}
          <input type="submit" value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  );
};

export default NuevoProsupuesto;
