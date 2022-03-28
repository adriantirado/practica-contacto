import React, { useState } from 'react';

import { contact } from '../../models/contact.class';
import ContactoForm from '../pure/forms/contactoForm';
import Contactos from '../pure/forms/contactos';


const Contactlist = () => {
    const contacto1 = new contact('adrian', 'tirado garcia', 'adrian@gmail.com', true);
    const contacto2 = new contact('jose', 'gonzalez garcia', 'jose@gmail.com', false);
    const contacto3 = new contact('pepe', 'garcia perez', 'pepe@gmail.com', true);
    const [contacto, setcontacto] = useState([contacto1, contacto2, contacto3]);

    function completeconctacto(contact){
        console.log('El contacto es:',contact)
        const index=contacto.indexOf(contact);
        const temp=[...contacto];
        temp[index].conectado=!temp[index].conectado;
        setcontacto(temp);
    }
    function deleteContacto(contact){
        const index=contacto.indexOf(contact);
        const temp=[...contacto];
        temp.splice(index,1);
        setcontacto(temp);
    }
    function addcontacto(contact){
        
        const temp=[...contacto];
        temp.push(contact);
        setcontacto(temp);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/*Titulo*/}
                    <div className='card-header p-3'>
                        <h5> Mis contactos:</h5>
                    </div>
                </div>
                {/*Contenido */}
                <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative' }}></div>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Nombre</th>
                            <th scope='col'>Apellido</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Conectado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*Lista de tareas */}
                        {contacto.map((contact, index) => {
                            return (
                                <Contactos key={index} contact={contact} 
                            complete={completeconctacto}  remove={deleteContacto}>
                                </Contactos>
                            )
                        })}

                    </tbody>
                </table>
            </div>
                <ContactoForm add={addcontacto}></ContactoForm>
        </div>
    );
};





export default Contactlist;
