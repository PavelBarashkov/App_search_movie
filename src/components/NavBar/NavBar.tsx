import React from "react";
import classes from "./navBar.module.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../slices/usersSlise/userSlice";

export const NavBar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.userInfo);
  const dispatch = useAppDispatch();
  const handleBtnLogout = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className={classes.nav}>
      <Container>
        <Navbar.Brand href="#home">КИНОвечер</Navbar.Brand>
        {user.isAuth && (
          <>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="gap-3">
                <Navbar.Text>
                  Вы вошли как: <span>{user.email}</span>
                </Navbar.Text>
                <Button variant="secondary" onClick={handleBtnLogout}>
                  Выйти
                </Button>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};
