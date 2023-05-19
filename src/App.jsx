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
     if(Object.keys(gastoEditar).length > 0){
     //console.log('Gasto editar Tiene algo')
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

  const guardarGasto = (gasto) => {
    gasto.fecha = Date.now();
  
    if (gastoEditar.id) {
      // Si el gasto a editar tiene un ID, actualiza el gasto existente
      const gastosActualizados = gastos.map((g) => {
        if (g.id === gastoEditar.id) {
          return gasto;
        }
        return g;
      });
      setGastos(gastosActualizados);
    } else {
      // Si el gasto a editar no tiene un ID, agrega un nuevo gasto
      gasto.id = generarId();
      setGastos([...gastos, gasto]);
    }
  
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

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
