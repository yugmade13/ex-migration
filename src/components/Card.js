import { Component } from 'react';

class Card extends Component {
  render() {
    const { name, avatar } = this.props;

    return (
      <div className="card-item">
        <img className="avatar" src={avatar} alt={`av-${name}`} />
        <div className="name">{name}</div>
      </div>
    );
  }
}

export default Card;
