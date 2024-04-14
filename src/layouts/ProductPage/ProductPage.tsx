import React from "react";
import classes from "./productPage.module.css"
import { Container } from "react-bootstrap";

interface IProductPage {
  card: React.ReactNode;
}

export const ProductPage: React.FC<IProductPage> = ({ card }) => {
  return (
    <Container className={classes.container}>
      <section className={classes.sectionCard}>{card}</section>
    </Container>
  );
};
