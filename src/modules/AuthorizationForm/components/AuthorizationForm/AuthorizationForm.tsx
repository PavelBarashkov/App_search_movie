import React from "react";
import classes from "./authorizationForm.module.css";
import { ErrorMessage, Field, Formik, Form, FormikErrors } from "formik";
import { Button, Card, Container } from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../../../pages/helpers/const/const";
import { useAppDispatch } from "../../../../app/hooks";
import { setUser } from "../../../../slices/usersSlise/userSlice";

interface IForm {
  email: string;
  password: string;
}

export const AuthorizationForm: React.FC = () => {
  const initialValues: IForm = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBtnSubmit = (
    values: IForm,
    setErrors: (errors: FormikErrors<IForm>) => void
  ) => {
    if (values.email !== "kinoman@mail.ru" || values.password !== "123456") {
      setErrors({ password: "Неверный E-mail или пароль" });
      return;
    }
    dispatch(setUser(values.email));
    navigate(MAIN);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Неверный фортам E-mail")
          .required("Заполните E-mail"),

        password: Yup.string().required("Заполните пароль"),
      })}
      onSubmit={(values, { setErrors }) => handleBtnSubmit(values, setErrors)}
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
            <Button type="submit" className="mt-3" variant="warning">
              Войти
            </Button>
          </Form>
        </Card>
      </Container>
    </Formik>
  );
};
