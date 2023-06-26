import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'

export default function Registration() {
    
    const initialValues = {
        username:"",
        password:""
    }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(12).required()
    });
 
    const onSubmit = (data)=>{
     axios.post("http://127.0.0.1:3001/auth", data)
     .then((response)=>{
        console.log("Registration done !", data, response);
      })
    }

  return (
    <div className='registerPage'>

        <Formik 
           initialValues={initialValues} 
           onSubmit={onSubmit}
           validationSchema={validationSchema}>
            <Form className="formContainer">
        
            <label> Username : </label>
            <ErrorMessage name='username' component= "span" />  
            <Field 
                id = "inputCreatePost"
                name = "username"
                placeholder = "Username"
            />

            <label> Password : </label>
            <ErrorMessage name='password' component= "span" />  
            <Field 
                id = "inputCreatePost"
                name = "password"
                type= "password"
                placeholder = "Your Password ..."
            />

            <button type='submit'>Register</button> 
            </Form>  
      </Formik>

    </div>
  )
}
