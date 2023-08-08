import PropTypes from 'prop-types';
import '../styles/rocketcards.css';

function Rocketitem({
  key,
  image1,
  summary,
  title,
  active,
}) {
  const activeStatus = active;

  return (
    <li className="cards">
      <div>
        <img src={image1} alt="Rocket" width="200" />
      </div>
      <div className="contentSection">
        <h2>{title}</h2>
        <i>
          {key}
        </i>
        <p className="description">
          {activeStatus === true ? (
            <span className="reservedTag">Reserved</span>
          ) : null}
          {summary}
        </p>
        <p><button type="submit">Reserve Rocket</button></p>
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
