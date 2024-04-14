import React, { useEffect, useState } from "react";
import classes from "./card.module.css";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { getTextOrPlaceholder } from "../../../../helpers/getTextOrPlaceholder";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { useGetCommentsQuery, useGetPostersQuery } from "../../../../API/myApi";
import { useNavigate } from "react-router-dom";
import { SimilarMovy } from "../../../../interface";
import { MAIN, PRODUCT } from "../../../../pages/helpers/const/const";

export const Card: React.FC<any> = ({ product }) => {
  const navigate = useNavigate();
  const [pageComment, setPageComment] = useState(1);
  const data = {
    page: pageComment,
    id: product.id ? product.id : null,
  };

  const { data: comments, refetch } = useGetCommentsQuery(data);

  const { data: posters, isError, isFetching } = useGetPostersQuery(product.id);

  useEffect(() => {
    refetch();
  }, [pageComment]);
  return (
    <>
      <Button variant="outline-warning" onClick={() =>{
        const local = localStorage.getItem('queryParams')
        if (local) {
          navigate(MAIN + local)
        } else {
          navigate(MAIN)
        }
      } }>
        Назад
      </Button>
      <Container className={classes.container}>
        <Row xs={1} md={2}>
          <Col className={`p-2 ${classes.col}`}>
            <h2 className={classes.title}>
              {getTextOrPlaceholder(product.name, "названии")}
            </h2>
            <div className={classes.poster}>
              <img src={product.poster.previewUrl} alt={product.name} />
            </div>
            <div>
              <span className={classes.title}>IMDb:</span>{" "}
              {getTextOrPlaceholder(product.rating.imdb, "рейтинге")}
            </div>
            {isFetching && <div>Загрузка кадров</div>}

            {posters && posters.total !== 0 && (
              <Carousel interval={null}>
                {posters.docs.map((item: any) => (
                  <Carousel.Item>
                    <img src={item.previewUrl} />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
          <Col className={`p-2 text-start ${classes.col}`}>
            <h2> </h2>
            <p className={classes.description_text}>
              {getTextOrPlaceholder(product.description, "описании")}
            </p>
            <div>
              <p className={classes.title}>Актеры:</p>
              {product.persons.length > 10 ? (
                <Pagination
                  arr={product.persons}
                  pages={product.persons.length}
                  limit={10}
                  initialPage={1}
                  type={"person"}
                />
              ) : (
                <>
                  {product.persons.map((item: any) => (
                    <div>{item.name}</div>
                  ))}
                </>
              )}
            </div>
            {product.isSeries && (
              <div>
                <p className={classes.title}>Сезоны:</p>
                {product.seasonsInfo.length > 5 ? (
                  <Pagination
                    arr={product.seasonsInfo}
                    pages={product.seasonsInfo.length}
                    limit={5}
                    initialPage={1}
                    type={"series"}
                  />
                ) : (
                  <>
                    {product.seasonsInfo.map((item: any) => (
                      <div>
                        Сезон: {item.number} серий: {item.episodesCount}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </Col>
        </Row>
        <Row className={classes.rowSimilarMovies}>
          <div className={classes.carouselItemDiv}>
            <p className={classes.title}>
              Похожие {product.type === "movie" ? "Фильмы" : "Сериалы"}
            </p>

            {(product.similarMovies.length !== 0) ? (
              <Carousel interval={null}>
              {product.similarMovies.map((item: SimilarMovy) => (
                <Carousel.Item className={classes.carouselItem}>
                  <img src={item.poster.previewUrl} onClick={() => navigate(PRODUCT + '/' + item.id)}/>
                </Carousel.Item>
              ))}
            </Carousel>
            ) : (
              <div>Нет информации</div>
            )}
            
          </div>
        </Row>
        <Row>
          <p className={classes.title}>Комментраии:</p>
          {comments && (
            <>
              {comments.docs.length > 2 ? (
                <Pagination
                  arr={comments.docs}
                  pages={comments.pages}
                  limit={3}
                  changePage={setPageComment}
                  initialPage={data.page}
                  type="comments"
                />
              ) : (
                <div>
                  {comments.docs.map((item: any) => (
                    <div>{item.author}</div>
                  ))}
                </div>
              )}
            </>
          )}
        </Row>
      </Container>
    </>
  );
};
