import { Component } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { makeData } from './utils/faker';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.setState({
      data: makeData(10),
    });
  }

  render() {
    const { data } = this.state;

    if (data.length === 0) {
      return (
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      );
    }

    return (
      <div className="container">
        <Header />
        <div className="card-list">
          {data.map((item) => (
            <Card key={item.name} {...item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
