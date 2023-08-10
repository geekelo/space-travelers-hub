import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import MissionItems from './missionsItem';
import { fetchMissions } from './redux/mission/missionsSlice';
import styles from './styles/styles.module.css';
import mStyles from './styles/missionpage.module.css';

function Missions() {
  const missionsData = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionsData.missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missionsData.missions.length]);

  return (
    <div className={styles.container}>
      <Table striped bordered hover className={mStyles.table}>
        <thead className={mStyles.thead}>
          <tr>
            <td>Mission</td>
            <td>Description</td>
            <td>Status</td>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          {missionsData.missions.map((mission) => (
            <MissionItems
              key={mission.mission_id}
              missionId={mission.mission_id}
              mission={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
