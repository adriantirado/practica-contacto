import React from 'react';

import { contact } from '../../models/contact.class';
import Contactos from '../pure/forms/contactos';


const Contactlist = () => {
    const contactonew=new contact('adrian','tirado garcia','123@gmail.com',false);
    return (
        <div>
            <Contactos contact={contactonew}></Contactos>
        </div>
    );
};


Contactlist.propTypes = {

};


export default Contactlist;
