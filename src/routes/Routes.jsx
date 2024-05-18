import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ExitPage from "../pages/ExitPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CardPage from "../pages/CardPage";
import NotFoundPage from "../pages/NotFoundPage";
import { paths } from "../lib/topic";
// import { useState } from "react";
import PrivateRoutes from "./PrivateRoutes";
import NewCardPage from "../pages/NewCardPage";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path={paths.MAIN} element={<PrivateRoutes />}>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.CARD} element={<CardPage />} />
          <Route path={paths.EXIT} element={<ExitPage />} />
          <Route path={paths.NEW_CARD} element={<NewCardPage />} />
        </Route>
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage />} />
      <Route path={paths.REGISTER} element={<RegisterPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
