import { React, useState } from "react";
import { Formik, Field, Form } from "formik";

export const CheckoutForm = (props) => {
  const initialValues = { nombre: "", telefono: "", correo: "" };
  const [validacion, setValidacion] = useState(false);

  const handleFormSubmit = (values) => {
    if (values.nombre && values.telefono && values.correo) {
      setValidacion(false);
      props.handleData(values);
    } else {
      //TODO mejorar validaciones de campos
      setValidacion(true);
    }
    console.log("valores", values);
  };

  return (
    <>
      <Formik initialValues={initialValues}
        onSubmit={async (values) => {
          handleFormSubmit(values);
        }}
      >
        <Form className="Form">
            <label><h4>nombre:</h4></label>
            <Field name="nombre" type="text" />
            <label><h4>telefono:</h4></label>
            <Field name="telefono" type="text" />
            <label><h4>correo:</h4></label>
            <Field name="correo" type="email" />
            <button type="submit">Validar Datos</button>
            <label hidden={!validacion}>
              Por favor ingrese todos los datos
            </label>
        </Form>
      </Formik>
    </>
  );
};

export default CheckoutForm;