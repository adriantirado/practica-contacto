import React from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../../models/contact.class';
import Contactosb from './contactosb';


const Contactos = ({contact}) => {

    return (
        <div>
           <h1>Nombre: {contact.name}</h1> 
           <h2>Apellido: {contact.apellido}</h2>
           <h3>email: {contact.email}</h3>
           <Contactosb conectado={false}></Contactosb>
        </div>
    );
};


Contactos.propTypes = {
    contact:PropTypes.instanceOf(contact)
};


export default Contactos;
