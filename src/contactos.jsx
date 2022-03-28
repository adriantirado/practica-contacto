import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { contact } from '../../../models/contact.class';
import '../../../styles/contacto.css' ;



const Contactos = ({ contact,complete, remove}) => {
    function contactoCompletedIcon(){
        if(contact.conectado){
            return   (<i onClick={()=>complete(contact)} className='bi bi-telephone concat-estado' style={{ color: 'green' }}></i>)
        }else{
            return (<i onClick={()=>complete(contact)} className='bi bi-telephone-x concat-estado' style={{ color: 'grey' }}></i>)
        }
    }
    return (
        <tr className='fw-normal'>
            <th>
                <span> {contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.apellido}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.email}</span>
            </td>
            <td className='align-middle'>

              {contactoCompletedIcon()}
                <i className='bi-trash task-action concat-estado ' style={{color: 'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>





        

    );
};


Contactos.propTypes = {
    contact: PropTypes.instanceOf(contact).isRequired,
    complete:PropTypes.func.isRequired,
    remove:PropTypes.func.isRequired
};


export default Contactos;
