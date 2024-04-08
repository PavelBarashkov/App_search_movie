import React, { useEffect } from "react";
import { useGetProductsQuery } from "../../../../API/myApi";
import { Container, Spinner } from "react-bootstrap";
import { ListItem } from "../../../../components/ListItem/ListItem";
import { useLocation } from "react-router-dom";
import classes from "./productList.module.css";
import { Product } from "../../../../interface";
import { useAppDispatch } from "../../../../app/hooks";
import { setProductList } from "../../slice/productListSlice";

export const ProductList: React.FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    data: products,
    isError,
    isFetching,
    refetch,
  } = useGetProductsQuery(location.search);

  useEffect(() => {
    if (products) {
      dispatch(setProductList(products));
    }
  }, [dispatch, products]);

  useEffect(() => {
    refetch();
  }, [location.search]);

  if (isFetching)
    return (
      <Container className="loading-container d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="warning" />
      </Container>
    );
  if (isError) return <div>Ошибка</div>;

  if (products.docs.length === 0) {
    return <div>Пусто</div>;
  }

  if (products) {
    return (
      <section className={classes.products}>
        <ol className={classes.list}>
          {products.docs.map((item: Product) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ol>
      </section>
    );
  }
  return null;
};
