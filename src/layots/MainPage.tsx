import React from "react";
import classes from "./mainPage.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom'
import { Pagination } from "../components/Pagination/Pagination";

interface IMainPageProps {
  aside: React.ReactNode;
  managerList: React.ReactNode;
  list: React.ReactNode;
  pagination: React.ReactNode
}

export const MainPage: React.FC<IMainPageProps> = ({aside, managerList, list, pagination}) => {


  return (
    <Container className={classes.container}>
      <Row className="g-3">
        <Col md={4} className="p-2">
          <aside>{aside}</aside>
        </Col>
        <Col md={8} className="p-2">
            <div className={classes.container_list}>
                <div>{managerList}</div>
                <div>{list}</div>
                <div>{pagination}</div>
            </div>
        </Col>
      </Row>
    </Container>
  );
};
