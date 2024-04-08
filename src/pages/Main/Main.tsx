import React from "react";
import { PaginationList, ProductList } from "../../modules";
import { MainPage } from "../../components/layots/MainPage";
import { ListFilter } from "../../components/ListFilter";
import { ShowBy } from "../../components/ShowBy";
import { ByShowList } from "../../modules/ProductList";

export const Main: React.FC = () => {
  return (
    <MainPage
      aside={<ListFilter />}
      managerList={<ByShowList />}
      list={<ProductList />}
      pagination={<PaginationList />}
    />
  );
};
