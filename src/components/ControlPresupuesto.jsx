import {useState,useEffect} from "react";
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ 
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {
  const [ porcentaje,setPorcentaje] = useState (0)
  const [disponible,SetDisponible] = useState(0)
  const [gastado,SetGastado] = useState(0)
  useEffect(() => {
  const totalGastado = gastos.reduce((total,gasto)=> gasto.cantidad + total, 0);
  const totalDisponible = presupuesto - totalGastado;
  

  //calcular el porcentaje gastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
    //console.log(nuevoPorcentaje)


  SetDisponible(totalDisponible);
  SetGastado(totalGastado);
  setTimeout(() => {
    setPorcentaje(nuevoPorcentaje)
  }, 1500);
  }, [gastos])

  
  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  };

 const handleResetApp = () =>{
  // console.log('reseteando la app')
  const resultado = confirm('Deseas reiniciar presupuesto y gastos?');
  if (resultado){
setGastos([])
  setPresupuesto(0)
  setIsValidPresupuesto(false)
  }
 }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <CircularProgressbar 
      styles={buildStyles({
        pathColor: porcentaje > 100 ? '#DC2626' : '#3B82F6',
        trailColor: '#F5F5F5',
        textColor:porcentaje > 100 ? '#DC2626' : '#3B82F6'
      })}
      value={porcentaje}
      text={`${porcentaje}% Gastado`}
      />

      <div className="contenido-presupuesto">
        <button className="reset-app"
        type="button"
        onClick={handleResetApp}
        >
          Resetear App
          </button>
        <p>
        <span> Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo' : ''}`}>
        <span> Disponible: </span>{formatearCantidad(disponible)}
        </p>

        <p>
        <span> Gastado: </span>{formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
