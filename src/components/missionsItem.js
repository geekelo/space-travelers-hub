import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './styles/missionpage.module.css';
import {
  ReserveMissions,
  RemoveReserveMissions,
} from './redux/mission/missionsSlice';

function MissionItems({
  missionId, mission, description, reserved,
}) {
  const dispatch = useDispatch();
  const reservedStat = reserved;

  const handleRemoveReserved = (e, missionId) => {
    e.preventDefault();
    dispatch(RemoveReserveMissions(missionId));
  };

  const handleReservedMissions = (e, missionId) => {
    e.preventDefault();
    dispatch(ReserveMissions(missionId));
  };

  return (
    <tr className={styles.missionList}>
      <td className={styles.mission_name}>{mission}</td>
      <td>{description}</td>
      <td className={styles.membership_stat}>
        {reservedStat === true ? (
          <button id={missionId} type="button" className={styles.active_member}>
            Active member
          </button>
        ) : (
          <button id={missionId} type="button" className={styles.not_member}>
            Not a member
          </button>
        )}
      </td>
      <td className={styles.reservation_stat}>
        {reservedStat === true ? (
          <button
            type="button"
            onClick={(e) => handleRemoveReserved(e, missionId)}
            className={styles.leave_mission}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) => handleReservedMissions(e, missionId)}
            className={styles.join_mission}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
}

MissionItems.propTypes = {
  missionId: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItems;
