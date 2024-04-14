import React from "react";
import { PaginationList, ProductList, ByShowList, Filters, SearchProduct } from "../../modules";
import { MainPage } from "../../layouts/MainPage";

export const Main: React.FC = () => {
  return (
    <MainPage
      aside={<Filters />}
      managerList={<ByShowList />}
      list={<ProductList />}
      pagination={<PaginationList />}
      search={<SearchProduct/>}
    />
  );
};
