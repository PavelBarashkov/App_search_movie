import React from "react";
import classes from "./cardProduct.module.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";

export const CardProduct: React.FC = () => {
  return (
    <Container>
      <Row className={classes.row} xs={1} md={2}>
        <Col className="p-2 ">
          <h2>Форсаж</h2>
          <div className={classes.poster}>
            <img src="https://image.openmoviedb.com/kinopoisk-images/6201401/8277905e-aa09-465d-b0de-7c389a42f215/orig" alt="Форсаж"/>
          </div>
          {/* <Carousel interval={null}>
            <Carousel.Item>
              <img src="https://image.openmoviedb.com/kinopoisk-images/6201401/8277905e-aa09-465d-b0de-7c389a42f215/orig" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://image.openmoviedb.com/kinopoisk-images/1946459/67f1a013-5bd1-438e-b135-25a07621eb9a/orig" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://image.openmoviedb.com/kinopoisk-images/1704946/7248d7f2-dbc3-4b3c-ba0d-a59f474d5a8b/orig" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel> */}
          <div>IMDb: 4.79</div>
        </Col>
        <Col className="p-2 text-start">
          <h2> </h2>
          <p className={classes.description_text}>
            Его зовут Брайан, и он — фанат турбин и нитроускорителей. Он
            пытается попасть в автобанду легендарного Доминика Торетто, чемпиона
            опасных и незаконных уличных гонок. Брайан также полицейский, и его
            задание — втереться в доверие к Торетто, подозреваемому в
            причастности к дерзким грабежам грузовиков, совершаемым прямо на
            ходу.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
