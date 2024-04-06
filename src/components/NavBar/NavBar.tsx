import React from "react";
import classes from "./navBar.module.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className={classes.nav}>
      <Container>
        <Navbar.Brand href="#home">КИНОвечер</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="gap-3">
            <Navbar.Text>
              Вы вошли как: <span>Pav.Barashkov@yandex.ru</span>
            </Navbar.Text>
            <Button variant="secondary">Выйти</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
