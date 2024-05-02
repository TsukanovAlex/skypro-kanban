import PropTypes from 'prop-types';
import Login from '../components/auth/Login';

const LoginPage = ({ userLogin }) => {
  return (
    <>
      <Login userLogin={userLogin} />
    </>
  );
};

LoginPage.propTypes = {
  userLogin: PropTypes.func.isRequired,
};

export default LoginPage;
