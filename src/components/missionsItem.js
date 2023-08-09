import PropTypes from 'prop-types';
import styles from './styles/missionpage.module.css';

function MissionItems({ missionId, mission, description }) {
  return (
    <tr className={styles.missionList}>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        <button id={missionId} type="button">
          Not a member
        </button>
      </td>
      <td>
        <button type="button">Join member</button>
      </td>
    </tr>
  );
}

MissionItems.propTypes = {
  missionId: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItems;
