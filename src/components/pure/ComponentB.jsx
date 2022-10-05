
import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ComponentB = ( { contacto }) => {
    const {nombre, apellido, email, conectado } = contacto
  return (
    <div>
        <h1>
            Nombre:  { nombre }
        </h1>
        <h2>
            Apellido: { apellido }
        </h2>
        <h3>
            Email: { email }
        </h3>
        <h4>
            Estado: {conectado ? 'Contacto En linea' : 'Contacto No disponible'}
        </h4>
    </div>
  )
}

ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponentB
