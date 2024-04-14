import React from "react";
import classes from "./productCard.module.css"
import { useParams } from "react-router-dom";
import { useGetCommentsQuery, useGetMovieInfoQuery } from "../../../../API/myApi";
import { Container, Spinner } from "react-bootstrap";
import { Card } from "../Card/Card";

export const ProductCard: React.FC = () => {
  const { id } = useParams();

  const {
    data: product,
    isError,
    isFetching,
    refetch,
  } = useGetMovieInfoQuery(`${id}`);


  if (isFetching) {
    return (
      <Container className="loading-container d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  }


  if(isError) {
    return <div className={classes.textError}>Ошибка при получении информации</div>
  }

  if (product) {
    return (<Card product={product}/>)
  }

  return <div>ProductCard</div>;
};
