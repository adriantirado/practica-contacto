
import React,{useRef} from 'react';
import PropTypes from 'prop-types';

import { contact } from '../../../models/contact.class';
const Contactoform = ({add}) => {
    const nameRef=useRef('');
    const apellidoRef=useRef('');
    const emailRef=useRef('');
    function addcontacto(e){
        e.preventDefault();
        const newContacto=new contact(
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false
            );
            add(newContacto);
    }
    return (
        <form onSubmit={addcontacto}>
        <div>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg'
            required autoFocus placeholder='Introduce nombre'/>
            <input ref={apellidoRef} id='inputApellido' type='text' className='form-control form-control-lg'
            required  placeholder='Introduce apellido'/>
            <input ref={emailRef} id='inputEmail' type='text' className='form-control form-control-lg'
            required placeholder='Introduce email' />
            
        </div>
        <button type='submit' className='btn btn-succes btn-lg'>Aceptar</button>
        </form>
    );
}
Contactoform.propTypes={
    add:PropTypes.func.isRequired,
};
export default Contactoform;
