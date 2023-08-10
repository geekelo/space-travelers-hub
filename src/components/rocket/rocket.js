import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rocket/rocketsSlice';
import Rocketitem from './rocketitem';

function Rocket() {
  const rocketsData = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsData.rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketsData.rockets.length]);

  return (
    <div>
      <ul>
        {rocketsData.rockets.map((each) => (
          <Rocketitem
            key={each.id}
            id={each.id}
            title={each.name}
            summary={each.description}
            image1={each.flickr_images[0]}
            image2={each.flickr_images[1]}
            active={each.active}
          />
        ))}
      </ul>
    </div>
  );
}

export default Rocket;
