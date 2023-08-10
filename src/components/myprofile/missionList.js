import PropTypes from 'prop-types';
import '../styles/myprofile.css';

function MissionProfile({ missionTitle }) {
  return (
    <li className="lists">
      <p>{missionTitle}</p>
    </li>
  );
}

MissionProfile.propTypes = {
  missionTitle: PropTypes.string.isRequired,
};

export default MissionProfile;
