import PopExit from "../components/popups/PopExit/PopExit";
import PropTypes from "prop-types";

const ExitPage = ({ userExit }) => {
  return (
    <div>
      <PopExit setIsAuth={userExit} />
    </div>
  );
};

ExitPage.propTypes = {
  userExit: PropTypes.func.isRequired,
};

export default ExitPage;