import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../lib/topic";
import PropTypes from "prop-types";

function PrivateRoutes({ user }) {
  return user ? <Outlet /> : <Navigate to={paths.LOGIN} />;
}

PrivateRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])])
};
export default PrivateRoutes;
