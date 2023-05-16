import React from 'react'
import ListadoGastos from './ListadoGastos'


const Gasto = ({gasto}) => {
  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        <div className='descripcion-gasto'>
            <p className='categoria'>
                {gasto.categoria}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Gasto
