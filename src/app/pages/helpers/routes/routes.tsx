import { AUTHORIZATION_ROUTE } from "../const/const";
import { Authorization } from "../../Authorization";

interface Path {
  path: string;
  element: React.ReactNode;
}

export const authRotes = [];

export const publicRoutes: Path[] = [
  {
    path: AUTHORIZATION_ROUTE,
    element: <Authorization />,
  },
];
