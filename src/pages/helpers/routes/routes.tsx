import { AUTHORIZATION_ROUTE, MAIN } from "../const/const";
import { Authorization } from "../../Authorization";
import { Main } from "../../Main/Main";

interface Path {
  path: string;
  element: React.ReactNode;
}

export const authRotes: Path[] = [
  {
    path: MAIN,
    element: <Main />,
  },
];

export const publicRoutes: Path[] = [
  {
    path: AUTHORIZATION_ROUTE,
    element: <Authorization />,
  },
];
