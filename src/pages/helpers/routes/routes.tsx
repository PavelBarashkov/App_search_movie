import { AUTHORIZATION_ROUTE, MAIN, PRODUCT } from "../const/const";
import { Authorization } from "../../Authorization";
import { Main } from "../../Main/Main";
import { Product } from "../../Product/Product";

interface Path {
  path: string;
  element: React.ReactNode;
}

export const authRotes: Path[] = [
];

export const publicRoutes: Path[] = [
  {
    path: AUTHORIZATION_ROUTE,
    element: <Authorization />,
  },
  {
    path: MAIN,
    element: <Main />,
  },
  {
    path: PRODUCT + '/:id',
    element: <Product />,
  },
];
