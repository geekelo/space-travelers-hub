import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rocket/rocketsSlice';
import { fetchMissions } from '../redux/mission/missionsSlice';
import RocketProfile from './rocketList';
import '../styles/myprofile.css';
import MissionProfile from './missionList';

function Myprofile() {
  const rocketsData = useSelector((state) => state.rocket.value);
  const missionData = useSelector((state) => state.mission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets, fetchMissions);
  }, [dispatch]);

  const activeArr = rocketsData.filter((each) => each.active === true);
  const reservedMissions = missionData.filter(
    (mission) => mission.reserved === true,
  );

  return (
    <div className="profileContainer">
      <div className="listSections">
        <div className="titles">
          <h2 className="titleText">My Missions</h2>
        </div>
        <ul className="itemsSection">
          {reservedMissions.length === 0 ? (
            <li className="lists">No Missions joined yet!</li>
          ) : (
            reservedMissions.map((mission) => (
              <MissionProfile
                key={mission.mission_id}
                missionTitle={mission.mission_name}
              />
            ))
          )}
        </ul>
      </div>
      <div className="listSections">
        <div className="titles">
          <h2>My Rockets</h2>
        </div>
        <ul className="itemsSection">
          {activeArr.length === 0 ? (
            <li className="lists">No Rockets reserved yet!</li>
          ) : (
            activeArr.map((each) => (
              <RocketProfile key={each.id} rocketTitle={each.name} />
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Myprofile;
