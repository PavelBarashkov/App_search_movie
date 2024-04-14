import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { authRotes, publicRoutes } from "../routes/routes";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { AUTHORIZATION_ROUTE } from "../const/const";

export const AppRouter: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.userInfo);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user.isAuth) {
  //     navigate(AUTHORIZATION_ROUTE);
  //   }
  // }, [user.isAuth]);

  return (
    <Routes>
      {user.isAuth &&
        authRotes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
