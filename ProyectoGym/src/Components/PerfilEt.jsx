import React from 'react'
import PerfilProfecionalEntrenador from "./PerfilProfecionalEntrenador.jsx";
import NameFotoEntrenador from './NameFotoEntrenador.jsx';
import ContactosEntrenador from './ContactosEntrenador.jsx';
import './PerfilEt.css'

const PerfilE = () => {
  return (
    <div className='Perfil'>
        <PerfilProfecionalEntrenador/>
        <NameFotoEntrenador/>
        <ContactosEntrenador/>
    </div>
  )
}
export default PerfilE