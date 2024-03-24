import { Person } from '../utils/faker';

function Card({ name, avatar }: Person) {
  return (
    <div className="card-item">
      <img className="avatar" src={avatar} alt={`av-${name}`} />
      <div className="name">{name}</div>
    </div>
  );
}

export default Card;
