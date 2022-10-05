
import React from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponentB from '../pure/ComponentB'

const ComponentA = () => {

    const defaultContacto = new Contacto('Jaime', 'Perez', 'jperez@gmail.com',false)

  return (
    <div>
      <ComponentB contacto={defaultContacto} />
    </div>
  )
}

export default ComponentA
