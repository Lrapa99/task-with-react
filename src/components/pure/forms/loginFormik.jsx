import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoadingFormik from "../loadingFormik";
import { useHistory } from "react-router-dom";

//validaciones del formulario con Yup
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password too short")
    .required("Password is required"),
});

const LoginFormik = () => {
  //valores iniciales
  const initialCredentials = {
    email: "",
    password: "",
  };

  const history = useHistory();

  const handleOnSubmit = async (values) => {
    // same shape as initial values
    await new Promise((r) => setTimeout(r, 2000));
    // console.log(values);
    //guardar datos de session en localStorage
    await localStorage.setItem("credentials", values);
    //limpiar formulario
    values.email = "";
    values.password = "";
    history.push("/");
  };

  return (
    <div className="text-center">
      <h4>Login Formik</h4>
      <Formik
        //valores iniciales
        initialValues={initialCredentials}
        //validaciones de Yup
        validationSchema={loginSchema}
        //onSubmit event
        onSubmit={handleOnSubmit}
      >
        {/* recibimos las props de formik */}
        {({ errors, touched, isSubmitting }) => (
          <Form className="d-flex flex-column justify-content-center align-items-center">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="example@email.com" />
            {errors.email && touched.email && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="email" />
              </p>
            )}

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="password" />
              </p>
            )}

            <button type="submit">Login</button>
            {/* Btn go to register */}
            <button type="button" onClick={() => history.push("/register")}>
              Go to Register
            </button>
            {/* mostramos contenido miestras se esta enviando */}
            {isSubmitting && <LoadingFormik />}
            {isSubmitting && (
              <p className="fw-bold">Login your credentials...</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginFormik;
