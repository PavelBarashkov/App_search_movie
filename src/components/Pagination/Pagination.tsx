import React, { useEffect } from "react";
import classes from "./paginatiom.module.css";
import { usePagination } from "../../hooks/usePagination";

export const Pagination: React.FC<any> = ({ pages, limit, handlePagination }) => {
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
  });

  useEffect(() => {
    handlePagination(page)
  }, [page])


  return (
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
      <button
        onClick={() => setPage(totalPages)}
        className={`${classes.page} ${page === totalPages && classes.active}`}
      >
        {totalPages}
      </button>
      <button
        onClick={nextPage}
        className={`${classes.page} ${page === totalPages && "disabled"}`}
      >
        &rarr;
      </button>
    </div>
  );
};
