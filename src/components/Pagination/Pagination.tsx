import React, { useEffect } from "react";
import classes from "./paginatiom.module.css";
import { usePagination } from "../../hooks/usePagination";

interface IPaginationProps {
  pages: number;
  limit: number;
  initialPage: number;
  arr?: any;
  type?: string;
  changePage?: (e: number) => void;
  addPageInQueryParams?: (e: number) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  pages,
  limit,
  addPageInQueryParams,
  initialPage,
  arr,
  type,
  changePage,
}) => {
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: limit,
    count: pages,
    initialPage: initialPage,
  });

  useEffect(() => {
    if (addPageInQueryParams) {
      addPageInQueryParams(page);
    }
    if (changePage) {
      changePage(page);
    }
  }, [page]);
  return (
    <>
      {arr && (
        <div style={{marginBottom: 10}}>
          {arr.slice(firstContentIndex, lastContentIndex).map((el: any) => (
            <>
              {type === "person" && <div>{el.name}</div>}

              {type === "series" && (
                <div>
                  Сезон: {el.number} серий: {el.episodesCount}
                </div>
              )}

            </>
          ))}
        </div>
      )}

      {type === "comments" && (
        <div className={classes.comments}>
          {arr.map((el: any) => (
            <div className={classes.comment}>
              <div>Автор: {el.author}</div>
              <div>Превью: {el.title}</div>
              <div>{el.review}</div>
            </div>
          ))}
        </div>
      )}
      <div className={classes.pagination}>
        <button onClick={prevPage} className={classes.page}>
          &larr;
        </button>
        <button
          onClick={() => setPage(1)}
          className={`${classes.page} ${page === 1 && classes.active}`}
        >
          1
        </button>
        {gaps.before ? "..." : null}
        {gaps.paginationGroup.map((el: any) => (
          <button
            onClick={() => setPage(el)}
            key={el}
            className={`${classes.page} ${page === el ? classes.active : ""}`}
          >
            {el}
          </button>
        ))}
        {gaps.after ? "..." : null}
        {!isNaN(totalPages) && (
          <button
            onClick={() => setPage(totalPages)}
            className={`${classes.page} ${
              page === totalPages && classes.active
            }`}
          >
            {totalPages}
          </button>
        )}
        <button
          onClick={nextPage}
          className={`${classes.page} ${page === totalPages && "disabled"}`}
        >
          &rarr;
        </button>
      </div>
    </>
  );
};
