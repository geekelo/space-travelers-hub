import PropTypes from 'prop-types';
import styles from './styles/missionpage.module.css';

function MissionItems({ missionId, mission, description }) {
  return (
    <div className={styles.missionList}>
      <div className={styles.missionName}>{mission}</div>
      <div className={styles.missionDesc}>{description}</div>
      <div className={styles.missionCta}>
        <button id={missionId} type="button">
          Not a member
        </button>
        <button type="button">Join member</button>
      </div>
    </div>
  );
}

MissionItems.propTypes = {
  missionId: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItems;
