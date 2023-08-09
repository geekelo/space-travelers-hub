import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionItems from './missionsItem';
import { fetchMissions } from '../redux/mission/missionsSlice';
import styles from './styles/styles.module.css';
import mStyles from './styles/missionpage.module.css';

function Missions() {
  const missions = useSelector((state) => state.mission.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={mStyles.table}>
        <div className={mStyles.thead}>
          <div className={mStyles.theadName}>Mission</div>
          <div className={mStyles.theadDesc}>Description</div>
          <div className={mStyles.theadStat}>Status</div>
        </div>
        {missions.map((mission) => (
          <MissionItems
            key={mission.mission_id}
            missionId={mission.mission_id}
            mission={mission.mission_name}
            description={mission.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Missions;
