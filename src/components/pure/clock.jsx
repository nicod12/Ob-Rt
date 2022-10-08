//Partiendo del siguiente componente de clase que contempla varios métodos de ciclo de vida, 
//convertidlo en un componente funcional que realice exactamente lo mismo:


import React, { useEffect, useState } from 'react'



const ClockComponent = () => {
    const datosIniciales = {
        fecha: new Date().toLocaleTimeString(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [datosPersona, setDatosPersona] = useState(datosIniciales)

    const { fecha, edad, nombre, apellidos } = datosIniciales

    useEffect(()=> {
        const timerID = setInterval(() => {
            console.log('Actualizacion de componente');
        }, 1000);

        return() => {
            console.log('Componente desaparece')
            clearInterval(timerID)
        }
    }, datosPersona)


    const tick = () => {
        
        setDatosPersona((prev) => {
            let edad = prev.edad + 1
            return {
                ... prev,
                fecha: new Date().toLocaleTimeString(),
                edad
            }
        })
    }


  return (
    <>
        <h2>
            Hora Actual: { fecha }
        </h2>
        <h3> 
            { nombre } {apellidos}
        </h3>
        <h4>
            Edad: { edad }
        </h4>
    </>
  )

  
}



export default ClockComponent;
