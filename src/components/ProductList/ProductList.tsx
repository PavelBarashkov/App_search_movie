import React from "react";
import classes from "./productList.module.css";
import { ListItem } from "../ListItem/ListItem";
import { Container } from "react-bootstrap";

export const ProductList: React.FC = () => {
  return (
    <section className={classes.products}>
      <Container>
        <ol className={classes.list}>
          {Array.from({ length: 10 }, (_, index) => (
            <ListItem key={index} />
          ))}
        </ol>
      </Container>
    </section>
  );
};
