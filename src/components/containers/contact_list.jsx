

import React , { useEffect, useState } from 'react'
import { Contacto } from '../../models/contacto.class';
import Contact from '../pure/contact';
import FormContact from '../pure/forms/formContact';

const ContactListComponent = () => {

  const contact1 = new Contacto('Nicolas', 'Dume', 'nico@gmail.com', false);
  const contact2 = new Contacto('Pepe', 'Dume', 'pepe@gmail.com', true);
  const contact3 = new Contacto('Jose', 'Dume', 'jose@gmail.com', false);

  const [dataContacto, setDataContacto] = useState([contact1, contact2, contact3]);

  useEffect(() => {
    console.log('Contact State has been modified');

       return () => {
          console.log('Contact component is going to unmount');
        }
    }, [])

    const removeContact = (contact) =>{
      const index = dataContacto.indexOf(contact);
      const temp = [...dataContacto];
      temp.splice(index,1);

      setDataContacto(temp);
    }

    const updateConnection = (contact) => {
      const index = dataContacto.indexOf(contact);
      const temp = [...dataContacto];
      temp[index].conectado = !temp[index].conectado;

      setDataContacto(temp)
    }

    const addContact = (contact) => {
      const temp = [...dataContacto];
      temp.push(contact)

      setDataContacto(temp)
    }

  return (
    <>
       <div className='col-12'>
            <div className='card'>
              {/* Card header (title) */}
              <div className='card-header p-3'>
                  <h5 className='text-center'>
                    Contactos :
                  </h5>
              </div>
              {/* Card body (content) */}
              <div className='card-body' 
                   data-mbd-perfect-scrollbar='true' 
                   style={ {position: 'relative', height: '400px'} }
               >
                <table>
                  <thead>
                     <tr>

                      <th scope='col'>Nombre</th>
                      <th scope='col'>Apellido</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Estado</th>

                     </tr>
                  </thead>
                  <tbody>
                    
                    {
                      dataContacto.map((item, index) =>{
                        return(
                          <Contact key={index} contact={item} remove={removeContact} ustate={updateConnection} />
                        )
                      })
                    }

                  </tbody>
                </table>

              </div>
            </div>
            <FormContact add={addContact}/>
              {/* <TaskForm add={addTask}/> */}
      </div>  
    </>
     
  )
}

export default ContactListComponent;