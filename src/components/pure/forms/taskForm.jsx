import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Taskform = () => {

 
    const initialValues = {
    name :'',
    description : '',
    level : '',
    completed:false,
    }
    const addTask=Yup.object().shape(
        {
        name: Yup.string()
       .required('Campo obligatorio'),
       description:Yup.string()
       .required('Campo obligatorio'),
        level:Yup.string()
        .required('Campo obligatorio'),
     
    } )
  

    return (
        <div>
            <Formik
            initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {addTask}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
     {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Nombre</label>
                            <Field id="name" type="text" name="name" placeholder="Escribe nombre" />
                            {
                                errors.name && touched.name && 
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Descripcion</label>
                            <Field id="description" type="text" name="description" placeholder="Escribe descripcion"/>
                            {
                                errors.description && touched.description && 
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }
                            <div id="my-radio-group">Level</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="level" value="Normal" />
              Normal
            </label>
            <label>
              <Field type="radio" name="level" value="Urgent" />
              Urgent
            </label>
            <label>
              <Field type="radio" name="level" value="Bloking" />
              Blocking
            </label>
            </div>
                            <button type="submit">Añadir tarea</button>
                            {isSubmitting ? (<p>Añadiendo tarea</p>): null}
                            </Form>
                    )
     }
            </Formik>
        </div>

      
    );
}

Taskform.protoTypes = {

    length: PropTypes.number.isRequired
}

export default Taskform;
