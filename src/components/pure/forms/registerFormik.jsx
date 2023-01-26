import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//Models
import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";
import LoadingFormik from "../loadingFormik";
import { useHistory } from "react-router-dom";

const RegisterFormik = () => {
  const history = useHistory();
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username to short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User/Admin")
      .required("Role is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Password must match!"),
      })
      .required("You must confirm the password"),
  });

  const submit = (values) => {
    alert("Register user");
  };
  return (
    <div className="text-center">
      <h4>Register Formik</h4>
      <Formik
        //valores iniciales
        initialValues={initialValues}
        //validaciones de Yup
        validationSchema={registerSchema}
        //onSubmit event
        onSubmit={async (values) => {
          // same shape as initial values
          await new Promise((r) => setTimeout(r, 2000));
          console.log(values);
          //limpiar formulario
          for (let key in values) {
            values[key] = "";
          }
        }}
      >
        {/* recibimos las props de formik */}
        {({ errors, touched, isSubmitting }) => (
          <Form className="d-flex flex-column justify-content-center align-items-center">
            {/* username */}
            <label htmlFor="username">User Name</label>
            <Field name="username" type="username" placeholder="username" />
            {errors.username && touched.username && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="username" />
              </p>
            )}
            {/* email */}
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="example@email.com" />
            {errors.email && touched.email && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="email" />
              </p>
            )}
            {/* password */}
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="password" />
            {errors.password && touched.password && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="password" />
              </p>
            )}
            {/* confirm password */}
            <label htmlFor="password">Confirm Password</label>
            <Field
              name="confirm"
              type="password"
              placeholder="confirm password"
            />
            {errors.confirm && touched.confirm && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="confirm" />
              </p>
            )}
            {/* btn Register */}
            <br />
            <button type="submit">Register Account</button>
            {/* Btn go to login */}
            <button type="button" onClick={() => history.push("/login")}>
              Go to Login
            </button>
            {/* mostramos contenido miestras se esta enviando */}
            {isSubmitting && <LoadingFormik />}
            {isSubmitting && (
              <p className="fw-bold">Register your credentials...</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
