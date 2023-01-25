import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoadingFormik from "../loadingFormik";

//validaciones del formulario con Yup
const createTaskSchema = Yup.object().shape({
  name: Yup.string()
    .min(8, "Name task too short")
    .required("Name task is required"),
  description: Yup.string()
    .min(8, "Description task too short")
    .required("Description task is required"),
});

const TaskFormik = ({
  addTask,
  length,
  colorPriority,
  setColorPriority,
  colorsPriority,
}) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef("");

  //valores iniciales
  const initialCreateTask = {
    name: "",
    description: "",
  };

  function addTasks(values) {
    const newTask = new Task(
      values.name,
      values.description,
      false,
      levelRef.current.value
    );
    addTask(newTask);

    // limpiamos formulario despues de enviar
    values.name = "";
    values.description = "";
    levelRef.current.value = LEVELS.NORMAL;
    //restablecemos el valor por defecto de la prioridad de la tarea
    setColorPriority(colorsPriority.normal);
  }

  function changeColorPriority() {
    (levelRef.current.value === LEVELS.NORMAL &&
      setColorPriority(colorsPriority.normal)) ||
      (levelRef.current.value === LEVELS.URGENT &&
        setColorPriority(colorsPriority.urgent)) ||
      (levelRef.current.value === LEVELS.BLOCKING &&
        setColorPriority(colorsPriority.blocking));
  }

  const onSubmitCreateTask = async (values) => {
    // same shape as initial values
    await new Promise((r) => setTimeout(r, 2000));
    console.log(values);
    //guardar datos de session en localStorage
    localStorage.setItem("tasks", values);

    addTasks(values);
  };

  return (
    <div className="text-center">
      <h4>Create task Formik</h4>
      <Formik
        //valores iniciales
        initialValues={initialCreateTask}
        //validaciones de Yup
        validationSchema={createTaskSchema}
        //onSubmit event
        onSubmit={onSubmitCreateTask}
      >
        {/* recibimos las props de formik */}
        {({ errors, touched, isSubmitting }) => (
          <Form className="d-flex gap-2 flex-column justify-content-center align-items-center">
            {/* input name */}
            <Field
              className="form-control form-control-lg"
              name="name"
              type="text"
              autoFocus
              placeholder="task name"
            />
            {errors.name && touched.name && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="name" />
              </p>
            )}

            {/* input description */}
            <Field
              className="form-control form-control-lg"
              name="description"
              type="text"
              placeholder="task description"
            />
            {errors.description && touched.description && (
              <p className="text-danger fw-bold opacity-75">
                <ErrorMessage name="description" />
              </p>
            )}
            {/* selecionar nivel de prioridad */}
            <select
              className={`form-select fw-bold text-opacity-75 ${colorPriority} `}
              aria-label={LEVELS.NORMAL}
              onChange={changeColorPriority}
              ref={levelRef}
              id="selectLevel"
            >
              <option className={colorsPriority.normal} value={LEVELS.NORMAL}>
                Normal
              </option>
              <option className={colorsPriority.urgent} value={LEVELS.URGENT}>
                Urgent
              </option>
              <option
                className={colorsPriority.blocking}
                value={LEVELS.BLOCKING}
              >
                Blocking
              </option>
            </select>
            {/* btn para enviar formulario */}
            <button
              className="btn btn-success btn-lg ms-2 opacity-75"
              type="submit"
            >
              {length > 0 ? "Add new task" : "Create your first task"}
            </button>
            {/* mostramos contenido miestras se esta enviando */}
            {isSubmitting && <LoadingFormik />}
            {isSubmitting && (
              <p className="fw-bold">Creating your new task...</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

TaskFormik.propTypes = {
  addTask: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  colorPriority: PropTypes.string.isRequired,
  colorsPriority: PropTypes.object.isRequired,
  setColorPriority: PropTypes.func.isRequired,
};

export default TaskFormik;
