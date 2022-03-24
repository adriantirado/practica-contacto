import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../../models/contact.class';


const Contactos = ({contact}) => {
    return (
        <div>
           <h1>Nombre: {contact.name}</h1> 
           <h2>Apellido: {contact.apellido}</h2>
           <h3>email: {contact.email}</h3>
           <h3>conectado: {contact.conectado?'Contacto en linea':'Contacto no Disponible'}</h3>
        </div>
    );
};


Contactos.propTypes = {
    contact:PropTypes.instanceOf(contact)
};


export default Contactos;
