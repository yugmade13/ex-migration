import PropTypes from 'prop-types';

function Card({ name, avatar }) {
  return (
    <div className="card-item">
      <img className="avatar" src={avatar} alt={`av-${name}`} />
      <div className="name">{name}</div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
};
