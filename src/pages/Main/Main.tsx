import React from "react";
import { PaginationList, ProductList, ByShowList, Filters } from "../../modules";
import { MainPage } from "../../layots/MainPage";

export const Main: React.FC = () => {
  return (
    <MainPage
      aside={<Filters />}
      managerList={<ByShowList />}
      list={<ProductList />}
      pagination={<PaginationList />}
    />
  );
};
