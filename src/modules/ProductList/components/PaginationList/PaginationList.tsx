import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../../../app/store";
import { Pagination } from "../../../../components/Pagination/Pagination";

export const PaginationList: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.productList);
  const [searchParams, setSearchParams] = useSearchParams();
  const pageForQueryParam = searchParams.get("page");

  const [pageActive, setPageActive] = useState(
    pageForQueryParam ? Number(pageForQueryParam) : 1
  );

  const addPageInQueryParams = (page: number) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      pages={products?.pages}
      limit={products?.limit}
      addPageInQueryParams={addPageInQueryParams}
      initialPage={pageActive}
    />
  );
};
