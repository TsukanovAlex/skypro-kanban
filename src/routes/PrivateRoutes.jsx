import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../lib/topic";
import PropTypes from "prop-types";
import { useUserContext } from "../context/hooks/useUser";

function PrivateRoutes() {
  const {user} = useUserContext()
  return user ? <Outlet /> : <Navigate to={paths.LOGIN} />;
}

PrivateRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.oneOf([null])])
};
export default PrivateRoutes;
