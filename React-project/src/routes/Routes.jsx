import { Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import ExitPage from "../pages/ExitPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CardPage from "../pages/CardPage";
import NotFoundPage from "../pages/NotFoundPage";
import { paths } from "../lib/topic";
import { useState } from "react";
import PrivateRoutes from "./PrivateRoutes";

export const AppRoutes = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      <Route path={paths.MAIN} element={<PrivateRoutes isAuth={isAuth} />}>
        <Route index element={<MainPage />} />
        <Route path={paths.CARD} element={<CardPage />} />
        <Route path={paths.EXIT} element={<ExitPage setIsAuth={setIsAuth}/>} />
      </Route>
      <Route path={paths.LOGIN} element={<LoginPage setIsAuth={setIsAuth}/>} />
      <Route path={paths.REGISTER} element={<RegisterPage />} />
      <Route path={paths.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
