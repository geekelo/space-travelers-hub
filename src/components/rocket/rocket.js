import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Rocketitem from './rocketitem';
import { fetchRockets } from '../redux/rocket/rocketsSlice';

function Rocket() {
  const rocketsData = useSelector((state) => state.rocket.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketsData.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rocketsData.length]);

  return (
    <div>
      <ul>
        {rocketsData.map((each) => (
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
