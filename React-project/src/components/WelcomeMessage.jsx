import PropTypes from "prop-types";

function WelcomeMessage({ name }) {
  return <h1>Добро пожаловать на наш сайт, {name || "пользователь"}!</h1>;
}

export default WelcomeMessage;

WelcomeMessage.propTypes = {
  name: PropTypes.string.isRequired,
};
