import React from "react";
// TODO: import useFormik from formik library
import {ErrorMessage, useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
  initialValues:{
    emailField:'',
    pswField:''
  }, 
  onSubmit: values => {
  console.log('Login Successful')
  },
  validate: values=>{
    let errors={};
    if (!values.emailField) {
      errors.emailError = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailField)
    ) {
      errors.emailError = 'Username should be an email';
    }
    if(!values.pswField) errors.pswError=' Required';
    return errors;
  }

  });

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div>Email:</div>
      <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
      {formik.errors.emailError ? <div id="emailError" style={{color:'red'}} > {formik.errors.emailError}</div>:null}

      <div>Password:</div>
      <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
      {formik.errors.pswError ? <div id='pswError' style={{color:'red'}} > {formik.errors.pswError}</div>:null}
      <input id="submitBtn" type="submit" />
    </form>
  </div>
  );
}

export default App;
