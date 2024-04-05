import React from "react";
import classes from "./navBar.module.css"
import { Container, Navbar } from "react-bootstrap";

export const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className={classes.nav}>
      <Container>
        <Navbar.Brand href="#home">КИНОвечер</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Вошли как: <span>Pav.Barashkov@yandex.ru</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
