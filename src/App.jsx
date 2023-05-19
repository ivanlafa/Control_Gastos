import { useState,useEffect} from "react";
import Header from "./components/Header";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";
import { generarId } from "./helpers";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar,setGastoEditar] = useState({})

    useEffect(() => {
    //console.log('componente listo')
    if(Object.keys(gastoEditar).length > 0 ){
      //console.log('gasto editar tiene algo')
      setModal(true);
    setTimeout(() => {
      //console.log('animando modal')

      setAnimarModal(true);
    }, 500);
    }

    }, [gastoEditar])


  const handleNuevoGasto = () => {
    //console.log('Diste click para añadir un nuevo gasto')
    setModal(true);
    setGastoEditar({});

    setTimeout(() => {
      //console.log('animando modal')

      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = gasto => {
    // console.log(gasto)
    // return ;

    if (gasto.id) {
      //actualizar
      const gastosActualizados = gastos.map(gastoState => gastoState.id ===
        gasto.id ? gasto : gastoState)
        setGastos(gastosActualizados);
    }else{
      //nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos,gasto])
    }
   setAnimarModal(false)
   setTimeout(() => {
    setModal(false)
   }, 500);
  };

  const eliminarGasto = id => {
//console.log('eliminando', id)
const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
setGastos(gastosActualizados);
//console.log(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
       gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos
            gastos={gastos}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            />

          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App;
