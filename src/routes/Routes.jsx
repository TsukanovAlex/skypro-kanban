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
  // const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  // const navigate = useNavigate();

  // function userLogin(newUser) {
  //   localStorage.setItem("user", JSON.stringify(newUser));
  //   setUser(newUser);
  //   navigate(paths.MAIN);
  // }

  // function userExit() {
  //   setUser(null);
  //   localStorage.removeItem("user");
  //   navigate(paths.LOGIN);
  // }
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
