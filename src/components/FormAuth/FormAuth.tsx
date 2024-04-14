import React from "react";
import classes from "./formAuth.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Card, Container } from "react-bootstrap";
import * as Yup from "yup";

export const FormAuth: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email address")
          .required("Заполните E-mail"),
          
        password: Yup.string().required("Заполните пароль"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Container
        className={`${classes.form} d-flex justify-content-center align-items-center`}
      >
        <Card className={`${classes.card} p-5`}>
          <h2 className="m-auto">Авторизация</h2>
          <Form className="d-flex flex-column">
            <Field
              name="email"
              type="email"
              placeholder="Введите ваш E-mail..."
              className={`${classes.input} mt-3`}
            />
            <div className={classes.error_message}>
              <ErrorMessage name="email" />
            </div>
            <Field
              name="password"
              type="password"
              placeholder="Введите ваш пароль..."
              className={`${classes.input} mt-3`}
            />
            <div className={classes.error_message}>
              <ErrorMessage name="password" className={classes.error_message} />
            </div>
            <Button className="mt-3" variant="success" type="submit">
              Войти
            </Button>
          </Form>
        </Card>
      </Container>
    </Formik>
  );
};
