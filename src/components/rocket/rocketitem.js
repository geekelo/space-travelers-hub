import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRockets, cancelResevations } from '../redux/rocket/rocketsSlice';
import '../styles/rocketcards.css';

function Rocketitem({
  id,
  image1,
  summary,
  title,
  active,
}) {
  const dispatch = useDispatch();
  const activeStatus = active;

  const reserveRocket = (e, currId) => {
    e.preventDefault();
    dispatch(reserveRockets(currId));
  };

  const cancelRocket = (e, currId) => {
    e.preventDefault();
    dispatch(cancelResevations(currId));
  };

  return (
    <li className="cards">
      <div>
        <img src={image1} alt="Rocket" width="200" />
      </div>
      <div className="contentSection">
        <h2>{title}</h2>
        <p className="description">
          {activeStatus === true ? (
            <span className="reservedTag">Reserved</span>
          ) : null}
          {summary}
        </p>
        <p>
          { activeStatus === true
            ? (<button className="cancelbtn" type="submit" onClick={(e) => cancelRocket(e, id)}>Cancel Resevation</button>)
            : (<button type="submit" onClick={(e) => reserveRocket(e, id)}>Reserve Rocket</button>)}
        </p>
      </div>
    </li>
  );
}

Rocketitem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Rocketitem;
