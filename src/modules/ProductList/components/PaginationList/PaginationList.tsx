import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../../../app/store";
import { Pagination } from "../../../../components/Pagination/Pagination";

export const PaginationList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { products } = useSelector((state: RootState) => state.productList);
  const handlePagination = (page: number) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      pages={products?.pages}
      limit={products?.limit}
      handlePagination={handlePagination}
    />
  );
};
