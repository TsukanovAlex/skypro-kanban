import PopExit from "../components/popups/PopExit/PopExit";
import PropTypes from "prop-types";

const ExitPage = ({ setIsAuth }) => {
  return (
    <div>
      <PopExit setIsAuth={setIsAuth} />
    </div>
  );
};

ExitPage.propTypes = {
  setIsAuth: PropTypes.func.isRequired,
};

export default ExitPage;