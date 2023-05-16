import React from 'react'
import Gasto from './gasto'

const ListadoGastos = ({gastos,setGastosEditar}) => {
  return (
    <div className='Listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos aun'}</h2>

            {gastos.map(gasto =>(
                <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastosEditar={setGastosEditar}
                />
            ))}
    </div>
  )
}

export default ListadoGastos
