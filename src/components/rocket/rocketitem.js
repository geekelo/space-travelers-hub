import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRockets } from './src/redux/rocket/rocketsSlice';
import '../styles/rocketcards.css';

function Rocketitem({
  key,
  image1,
  summary,
  title,
  active,
}) {
  const dispatch = useDispatch();
  const activeStatus = active;

  const reserveRocket = (e, key) => {
    e.preventDefault();
    dispatch(reserveRockets(key));
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
            ? (<button className="cancelbtn" type="submit">Cancel Resevation</button>)
            : (<button type="submit" onClick={(e) => reserveRocket(e, key)}>Reserve Rocket</button>)}
        </p>
      </div>
    </li>
  );
}

Rocketitem.propTypes = {
  title: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  image1: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Rocketitem;
