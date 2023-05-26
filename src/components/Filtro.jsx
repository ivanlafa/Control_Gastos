import {useState,useEffect} from 'react'

const Filtro = ({filtro,setFiltro}) => {
  return (
    <div>
      <div className='filtros sombra contenedor'>
        <form>
          <div className='campo'> 
              <label>
                  Filtrar Gastos
              </label>
              <select 
              value={filtro}
              onChange={e => setFiltro(e.target.value)}
              >
           <option value="">-- Seleccione --</option>
                <option value="ahorro">Ahorro</option>
                <option value="comida">Comida</option>
                <option value="casa">Casa</option>
                <option value="ocio">Ocio</option>
                <option value="gastos">Gastos Varios</option>
                <option value="salud">Salud</option>
                <option value="suscripciones">Suscripciones</option>
              </select>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Filtro
