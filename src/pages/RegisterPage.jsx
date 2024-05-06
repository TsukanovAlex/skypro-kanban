import Register from "../components/auth/Register"
import PropTypes from "prop-types";


const RegisterPage = ({userLogin}) => {
  return (
   <>
   <Register userLogin={userLogin}/>
   </>
  )
}
RegisterPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default RegisterPage
