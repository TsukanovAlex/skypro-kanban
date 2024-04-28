import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../lib/topic";
import PropTypes from 'prop-types';

function PrivateRoutes({ isAuth }) {
  return (
    isAuth ? <Outlet /> : <Navigate to={paths.LOGIN} />
  )

}
PrivateRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}; 

export default PrivateRoutes;
