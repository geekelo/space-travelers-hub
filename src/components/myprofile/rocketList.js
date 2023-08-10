import PropTypes from 'prop-types';
import '../styles/myprofile.css';

function RocketProfile({ rocketTitle }) {
  return (
    <li className="lists">
      <p>{rocketTitle}</p>
    </li>
  );
}

RocketProfile.propTypes = {
  rocketTitle: PropTypes.string.isRequired,
};

export default RocketProfile;
