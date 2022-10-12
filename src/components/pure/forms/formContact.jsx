
import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class';

const FormContact = ({ add }) => {
    const nameRef = useRef('');
    const surnameRef = useRef('');
    const emailRef = useRef('');


    const addNewContact = (e) => {
        e.preventDefault();
        const newContact = new Contacto(
            nameRef.current.value,
            surnameRef.current.value,
            emailRef.current.value,
            false
        )

        add(newContact)
    }

  return (
    <form onSubmit={addNewContact} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
           <input 
                className='form-control form-control-lg'     
                type='text'
                placeholder='Name'
                ref={nameRef}
                id='nameInput'
                name='nameInput'
                required
                autoFocus
             />
             <input 
                className='form-control form-control-lg'  
                type="text"
                placeholder='Surname'
                ref={surnameRef}   
                id='surnameInput'
                name='surnameInput'
                required
             />
            <input 
                className='form-control form-control-lg'  
                type="email"
                placeholder='Email'
                ref={emailRef}   
                id='emailInput'
                name='emailnput'
                required
             />
        </div>
        <button type='submit' className='btn btn-primary ms-3'>
            Add
        </button>
    </form>
  )
}

FormContact.PropTypes = {
    add: PropTypes.func.isRequired
}

export default FormContact;