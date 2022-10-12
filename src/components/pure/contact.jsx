

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'

const ContactComponent = ({ contact, remove, ustate }) => {
  
  useEffect(()=> {
    console.log('Created Contact')
    return() => {
      console.log(`Contact: ${contact} is going to unmount`)
    }
  }, [contact])
  

 const { nombre, apellido, email, conectado } = contact

 const isConect = () =>{
  if(conectado) {
    return(<i onClick={()=> ustate(contact)} className='bi-toggle-on cursor' style={ {color:'green'} }></i>)
  } else {
    return(<i onClick={()=> ustate(contact)} className='bi-toggle-on cursor' style={ {color:'red'} }></i>)
  }
 }

 

  return (
      <tr className='fw-normal'>
            <th>
              <span>{ nombre }</span>
            </th>
            <td className='aling-middle'>
              <span>{ apellido }</span>
            </td>
            <td className='aling-middle'>
              {/* Execution of function to return badge element */}
              <span>{ email }</span>
            </td>
            <td className='aling-middle'>
              {/* Execution of function to return  depending state conect */}
                {isConect()}
             <i onClick={()=> remove(contact)} className='bi-trash cursor' style={ {color:'orange'} }></i>
            </td>
        </tr>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contacto).isRequired,
  remove: PropTypes.func.isRequired,
  ustate: PropTypes.func.isRequired
 }

export default ContactComponent

