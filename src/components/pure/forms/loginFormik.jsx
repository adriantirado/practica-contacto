import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
);


const Loginformik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

 let navigate=useNavigate();
    const pasar=()=>{
        navigate("/registro", { replace: false });
    }
    const tareas=()=>{
        navigate("/dashboard",{replace:false});
    }
    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues = { initialCredentials }
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // ** onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 4000));
                  
                    // We save the data in the localstorage
                    await localStorage.setItem('credentials', values);
                 
                }}
            >
                {/* We obtain props from Formik */}
                
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type='password'
                            />
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage>
                                )
                            }
                            <button type="submit">Login</button>
                            {isSubmitting ? (<button onClick={tareas}>Ir tareas</button>): null}
                            
                            
                            <button type="button" onClick={pasar}>Ir a registrar</button>
                        </Form>
                )}
            </Formik>
        </div>
    );
}

export default Loginformik;
