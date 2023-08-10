import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rocket/rocketsSlice';
import RocketProfile from './rocketList';
import '../styles/myprofile.css';

function Myprofile() {
  const rocketsData = useSelector((state) => state.rocket.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets);
  }, [dispatch]);

  const activeArr = rocketsData.filter((each) => each.active === true);

  return (
    <div className="profileContainer">
      <div className="listSections">
        <div className="titles"><h2 className="titleText">My Missions</h2></div>
        <ul className="itemsSection">
          <li className="lists">under construction</li>
        </ul>
      </div>
      <div className="listSections">
        <div className="titles"><h2>My Rockets</h2></div>
        <ul className="itemsSection">
          {
            activeArr.length === 0
              ? <li className="lists">No Rockets reserved yet!</li>
              : activeArr.map((each) => <RocketProfile key={each.id} rocketTitle={each.name} />)
          }
        </ul>
      </div>
    </div>
  );
}

export default Myprofile;
