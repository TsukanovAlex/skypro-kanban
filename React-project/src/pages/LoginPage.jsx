import PropTypes from 'prop-types';
import Login from '../components/auth/Login';

const LoginPage = ({ setIsAuth }) => {
  return (
    <>
      <Login setIsAuth={setIsAuth} />
    </>
  );
};

LoginPage.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};

export default LoginPage;
