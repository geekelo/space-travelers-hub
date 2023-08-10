import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rocket/rocketsSlice';
import Rocketitem from './rocketitem';

function Rocket() {
  const rockets = useSelector((state) => state.existingRockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {rockets.map((each) => (
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
