import React from 'react'
import Img from "../assets/FotoEt1.png"
import './PerfilEt.css'

const PerfilE = () => {
  return (
    <div className='Perfil'>
        <div className='FotoNameIng'>
            <div className='Name'>
                <h1>MARIO HUGO HERRERA QUISPE</h1>
            </div>
            <div className='ImagenName'>
                <img src={Img} alt="" />
            </div>
            <hr />
        </div>
        <div className='DatosPerf'>
            <h3>PERFIL PROFECIONAL</h3>
            <p>Personal trainer con grado en Ciencias de la actividad fisica y del 
                deporte y experiencia acreditable de trabajo en centros de fitness
                impartiendo diversas especialidades tanto grupales como individuales 
                solidos conocimientos de fisioterapia y rehabilitacion de lesiones
            </p>

            <hr />
        </div>
        <div className='Contactos'>
            <h3>Contacto</h3>
            <p>
                el:68148899
                maherrersua@gmail.co
            </p>
        </div>
    </div>
  )
}
export default PerfilE